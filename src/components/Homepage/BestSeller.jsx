import ProductCard1 from "./ProductCard1";


export default function BestSellers() {
  const products = [
    {
      id: 1,
      title: "2023 Honda Accord Touring",
      price: 27995,
      year: "2023",
      mileage: "18,400 miles",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1",
    },
    {
      id: 2,
      title: "2022 Toyota RAV4 XLE",
      price: 31950,
      year: "2022",
      mileage: "22,900 miles",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    },
    {
      id: 3,
      title: "2021 BMW 330i",
      price: 33990,
      year: "2021",
      mileage: "28,100 miles",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1493238792000-8113da705763",
    },
    {
      id: 4,
      title: "2020 Ford F-150 Lariat",
      price: 38900,
      year: "2020",
      mileage: "35,600 miles",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
    },
  ];

  return (
    <section className="py-16 bg-gray-900" id="inventory">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white">
          Featured Inventory
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard1 key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
