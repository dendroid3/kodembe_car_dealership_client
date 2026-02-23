import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { apiRequest, toMediaUrl } from '../../lib/api';

const MILES_TO_KM = 1.60934;

const InventoryPage = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;

    async function loadCars() {
      try {
        const data = await apiRequest('/cars.php');
        if (mounted) {
          setCars(data.cars || []);
        }
      } catch (err) {
        if (mounted) {
          setError(err.message);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadCars();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <section className="mb-8 rounded-2xl bg-gradient-to-r from-stone-900 to-stone-700 p-8 text-white">
        <h1 className="text-3xl font-extrabold">Kodembe Car Yard</h1>
        <p className="mt-2 text-stone-200">Kenya&apos;s trusted marketplace for quality salvage vehicles.</p>
      </section>

      {loading && <p className="text-stone-600">Loading inventory...</p>}
      {error && <p className="rounded-md bg-red-100 p-3 text-red-700">{error}</p>}

      {!loading && !error && (
        <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <article key={car.id} className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm">
              <img
                src={toMediaUrl(car.image_url) || 'https://via.placeholder.com/640x360?text=No+Image'}
                alt={`${car.year} ${car.make} ${car.model}`}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
              <div className="mb-3 flex items-start justify-between gap-3">
                <h2 className="text-lg font-bold text-stone-900">
                  {car.year} {car.make} {car.model}
                </h2>
                <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-700">
                  {car.status}
                </span>
              </div>
              <p className="text-sm text-stone-600">{car.damage_summary}</p>
              <div className="mt-4 space-y-1 text-sm text-stone-700">
                <p>Mileage: {Math.round(Number(car.mileage) * MILES_TO_KM).toLocaleString()} km</p>
                <p>Location: {car.location}</p>
                <p className="font-bold text-stone-900">KES {Number(car.price).toLocaleString()}</p>
              </div>
              <Link
                to={`/cars/${car.id}`}
                className="mt-4 inline-block rounded-md bg-amber-500 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-amber-400"
              >
                View details
              </Link>
              </div>
            </article>
          ))}
          {cars.length === 0 && <p className="text-stone-600">No salvage cars available right now.</p>}
        </section>
      )}
    </main>
  );
};

export default InventoryPage;
