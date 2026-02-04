import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard from "./ProductCard1";
import "swiper/css";
import "swiper/css/navigation";

export default function NewArrivals() {
  const products = [
    {
      id: 1,
      title: "2024 Mazda CX-5 Carbon",
      price: 36500,
      year: "2024",
      mileage: "7,200 miles",
      transmission: "Automatic",
      image:
        "https://images.unsplash.com/photo-1549924231-f129b911e442",
    },
    {
      id: 2,
      title: "2024 Hyundai Tucson SEL",
      price: 32900,
      year: "2024",
      mileage: "5,800 miles",
      transmission: "Automatic",
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2",
    },
    {
      id: 3,
      title: "2023 Audi Q5 Premium",
      price: 42900,
      year: "2023",
      mileage: "14,300 miles",
      transmission: "Automatic",
      image:
        "https://images.unsplash.com/photo-1471478331149-c72f17e33c73",
    },
    {
      id: 4,
      title: "2022 Subaru Outback Limited",
      price: 31800,
      year: "2022",
      mileage: "21,500 miles",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
    },
    {
      id: 5,
      title: "2021 Mercedes-Benz GLC 300",
      price: 37900,
      year: "2021",
      mileage: "29,400 miles",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1542362567-b07e54358753",
    },
    {
      id: 6,
      title: "2023 Kia Telluride SX",
      price: 45900,
      year: "2023",
      mileage: "12,700 miles",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
      id: 7,
      title: "2024 Tesla Model 3 RWD",
      price: 43900,
      year: "2024",
      mileage: "3,900 miles",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1502877828070-33dc21c60b93",
    },
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white">
          Latest Arrivals
        </h2>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="py-4"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
