export default function ProductCard1({ title, price, image, year, mileage, transmission }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <img
        src={image}
        alt={title}
        className="w-full h-48 md:h-64 object-cover"
      />
      <div className="p-4">
        <div className="text-sm text-gray-500">{year}</div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="mt-2 flex items-center gap-3 text-xs text-gray-500">
          <span>{mileage}</span>
          <span>•</span>
          <span>{transmission}</span>
        </div>
        <p className="text-gray-700 text-md mt-3 font-semibold">
          Starting at ${price.toLocaleString()}
        </p>
        <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200">
          View Details
        </button>
      </div>
    </div>
  );
}
  
