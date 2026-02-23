import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { apiRequest } from '../../lib/api';

const EMPTY_FORM = {
  make: '',
  model: '',
  year: '',
  vin: '',
  mileage: '',
  price: '',
  location: '',
  status: 'Available',
  title_status: 'Salvage',
  damage_summary: '',
  description: '',
};

const AdminCarsPage = () => {
  const token = localStorage.getItem('admin_token');
  const [cars, setCars] = useState([]);
  const [form, setForm] = useState(EMPTY_FORM);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [coverImageFile, setCoverImageFile] = useState(null);
  const [galleryImageFiles, setGalleryImageFiles] = useState([]);

  useEffect(() => {
    if (!token) return;

    async function loadCars() {
      try {
        const data = await apiRequest('/cars.php');
        setCars(data.cars || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadCars();
  }, [token]);

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  function onChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function beginEdit(car) {
    setEditingId(car.id);
    setForm({
      make: car.make,
      model: car.model,
      year: String(car.year),
      vin: car.vin,
      mileage: String(car.mileage),
      price: String(car.price),
      location: car.location,
      status: car.status,
      title_status: car.title_status,
      damage_summary: car.damage_summary,
      description: car.description,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function resetForm() {
    setEditingId(null);
    setForm(EMPTY_FORM);
    setCoverImageFile(null);
    setGalleryImageFiles([]);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    try {
      if (editingId) {
        const payload = {
          make: form.make,
          model: form.model,
          year: Number(form.year),
          vin: form.vin,
          mileage: Number(form.mileage),
          price: Number(form.price),
          location: form.location,
          status: form.status,
          title_status: form.title_status,
          damage_summary: form.damage_summary,
          description: form.description,
        };
        await apiRequest(`/car.php?id=${editingId}`, {
          method: 'PUT',
          body: JSON.stringify(payload),
        });
      } else {
        if (!coverImageFile) {
          setError('A cover image is required when creating a car.');
          return;
        }

        const formData = new FormData();
        formData.append('make', form.make);
        formData.append('model', form.model);
        formData.append('year', String(Number(form.year)));
        formData.append('vin', form.vin);
        formData.append('mileage', String(Number(form.mileage)));
        formData.append('price', String(Number(form.price)));
        formData.append('location', form.location);
        formData.append('status', form.status);
        formData.append('title_status', form.title_status);
        formData.append('damage_summary', form.damage_summary);
        formData.append('description', form.description);
        formData.append('image', coverImageFile);
        galleryImageFiles.forEach((file) => formData.append('images[]', file));

        await apiRequest('/cars.php', {
          method: 'POST',
          body: formData,
        });
      }

      const refreshed = await apiRequest('/cars.php');
      setCars(refreshed.cars || []);
      resetForm();
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('Delete this car listing?')) return;

    setError('');
    try {
      await apiRequest(`/car.php?id=${id}`, { method: 'DELETE' });
      setCars((prev) => prev.filter((car) => car.id !== id));
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <section className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-stone-900">Admin Car Management</h1>
        <p className="mt-1 text-sm text-stone-600">Create, edit, and remove salvage car listings.</p>

        <form onSubmit={handleSubmit} className="mt-5 grid gap-3 sm:grid-cols-2">
          <input name="make" value={form.make} onChange={onChange} required placeholder="Make" className="rounded-md border px-3 py-2" />
          <input name="model" value={form.model} onChange={onChange} required placeholder="Model" className="rounded-md border px-3 py-2" />
          <input name="year" type="number" value={form.year} onChange={onChange} required placeholder="Year" className="rounded-md border px-3 py-2" />
          <input name="vin" value={form.vin} onChange={onChange} required placeholder="VIN" className="rounded-md border px-3 py-2" />
          {!editingId && (
            <>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm font-medium text-stone-700">Cover image</label>
                <input
                  type="file"
                  accept="image/*"
                  required
                  onChange={(e) => setCoverImageFile(e.target.files?.[0] || null)}
                  className="w-full rounded-md border px-3 py-2"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm font-medium text-stone-700">Gallery images</label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => setGalleryImageFiles(Array.from(e.target.files || []))}
                  className="w-full rounded-md border px-3 py-2"
                />
              </div>
            </>
          )}
          <input name="mileage" type="number" value={form.mileage} onChange={onChange} required placeholder="Mileage" className="rounded-md border px-3 py-2" />
          <input name="price" type="number" step="0.01" value={form.price} onChange={onChange} required placeholder="Price (KES)" className="rounded-md border px-3 py-2" />
          <input name="location" value={form.location} onChange={onChange} required placeholder="Location" className="rounded-md border px-3 py-2" />

          <select name="status" value={form.status} onChange={onChange} className="rounded-md border px-3 py-2">
            <option>Available</option>
            <option>Sold</option>
            <option>Pending</option>
          </select>

          <select name="title_status" value={form.title_status} onChange={onChange} className="rounded-md border px-3 py-2">
            <option>Salvage</option>
            <option>Clean</option>
            <option>Rebuilt</option>
            <option>Parts Only</option>
          </select>

          <input name="damage_summary" value={form.damage_summary} onChange={onChange} required placeholder="Damage summary" className="rounded-md border px-3 py-2 sm:col-span-2" />
          <textarea name="description" value={form.description} onChange={onChange} required placeholder="Description" className="rounded-md border px-3 py-2 sm:col-span-2" rows={3} />

          {error && <p className="sm:col-span-2 rounded-md bg-red-100 p-2 text-sm text-red-700">{error}</p>}

          <div className="sm:col-span-2 flex gap-3">
            <button type="submit" className="rounded-md bg-stone-900 px-4 py-2 font-semibold text-white hover:bg-stone-700">
              {editingId ? 'Update Car' : 'Create Car'}
            </button>
            {editingId && (
              <button type="button" onClick={resetForm} className="rounded-md border border-stone-300 px-4 py-2">
                Cancel
              </button>
            )}
          </div>
        </form>
      </section>

      <section className="mt-6 rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-stone-900">Current Listings</h2>
        {loading ? (
          <p className="mt-3 text-stone-600">Loading listings...</p>
        ) : (
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="border-b bg-stone-50 text-left">
                  <th className="px-3 py-2">Car</th>
                  <th className="px-3 py-2">VIN</th>
                  <th className="px-3 py-2">Price</th>
                  <th className="px-3 py-2">Status</th>
                  <th className="px-3 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cars.map((car) => (
                  <tr key={car.id} className="border-b">
                    <td className="px-3 py-2">{car.year} {car.make} {car.model}</td>
                    <td className="px-3 py-2">{car.vin}</td>
                    <td className="px-3 py-2">KES {Number(car.price).toLocaleString()}</td>
                    <td className="px-3 py-2">{car.status}</td>
                    <td className="px-3 py-2">
                      <div className="flex gap-2">
                        <button onClick={() => beginEdit(car)} className="rounded bg-amber-500 px-3 py-1 font-medium text-stone-900">
                          Edit
                        </button>
                        <button onClick={() => handleDelete(car.id)} className="rounded bg-red-600 px-3 py-1 font-medium text-white">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {cars.length === 0 && (
                  <tr>
                    <td className="px-3 py-3 text-stone-600" colSpan={5}>No cars found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
};

export default AdminCarsPage;
