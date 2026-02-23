import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { apiRequest, toMediaUrl } from '../../lib/api';

const MILES_TO_KM = 1.60934;

const CarDetailsPage = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const galleryImages = Array.isArray(car?.images)
    ? car.images.map((img) => toMediaUrl(img?.url)).filter(Boolean)
    : [];

  useEffect(() => {
    let mounted = true;

    async function loadCar() {
      try {
        const data = await apiRequest(`/car.php?id=${id}`);
        if (mounted) {
          const nextCar = data.car || null;
          setCar(nextCar);
          const firstGalleryImage = Array.isArray(nextCar?.images)
            ? nextCar.images.map((img) => toMediaUrl(img?.url)).find(Boolean)
            : '';
          setSelectedImage(firstGalleryImage || toMediaUrl(nextCar?.image_url) || '');
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

    loadCar();
    return () => {
      mounted = false;
    };
  }, [id]);

  useEffect(() => {
    if (!isLightboxOpen) return;

    function onKeyDown(e) {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isLightboxOpen]);

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <Link to="/" className="text-sm font-medium text-amber-700 hover:underline">
        Back to inventory
      </Link>
      {loading && <p className="mt-4 text-stone-600">Loading car...</p>}
      {error && <p className="mt-4 rounded-md bg-red-100 p-3 text-red-700">{error}</p>}

      {car && (
        <section className="mt-4 rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-extrabold text-stone-900">
            {car.year} {car.make} {car.model}
          </h1>
          <p className="mt-1 text-stone-600">VIN: {car.vin}</p>

          <div className="mt-5">
            <img
              src={selectedImage || 'https://via.placeholder.com/960x540?text=No+Image'}
              alt={`${car.year} ${car.make} ${car.model}`}
              className="h-64 w-full cursor-zoom-in rounded-lg object-cover sm:h-96"
              onClick={() => selectedImage && setIsLightboxOpen(true)}
            />
            {galleryImages.length > 0 && (
              <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-5">
                {galleryImages.map((url, index) => (
                  <button
                    key={`${url}-${index}`}
                    type="button"
                    onClick={() => {
                      setSelectedImage(url);
                      setIsLightboxOpen(true);
                    }}
                    className={`overflow-hidden rounded-md border ${
                      selectedImage === url ? 'border-amber-500' : 'border-stone-200'
                    }`}
                  >
                    <img
                      src={url}
                      alt={`Car view ${index + 1}`}
                      className="h-20 w-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
            <p><span className="font-semibold">Price:</span> KES {Number(car.price).toLocaleString()}</p>
            <p><span className="font-semibold">Mileage:</span> {Math.round(Number(car.mileage) * MILES_TO_KM).toLocaleString()} km</p>
            <p><span className="font-semibold">Location:</span> {car.location}</p>
            <p><span className="font-semibold">Status:</span> {car.status}</p>
            <p className="sm:col-span-2"><span className="font-semibold">Title:</span> {car.title_status}</p>
            <p className="sm:col-span-2"><span className="font-semibold">Damage:</span> {car.damage_summary}</p>
            <p className="sm:col-span-2"><span className="font-semibold">Description:</span> {car.description}</p>
          </div>
        </section>
      )}

      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded bg-white/20 px-3 py-2 text-sm font-semibold text-white hover:bg-white/30"
            onClick={() => setIsLightboxOpen(false)}
          >
            Close
          </button>
          <img
            src={selectedImage}
            alt={`${car.year} ${car.make} ${car.model}`}
            className="max-h-[90vh] max-w-[95vw] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
};

export default CarDetailsPage;
