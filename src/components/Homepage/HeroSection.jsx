import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroSection() {
  const images = [
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    "https://images.unsplash.com/photo-1493238792000-8113da705763",
    "https://images.unsplash.com/photo-1502877338535-766e1452684a",
  ];

  return (
    <div className="pt-16">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-[500px] w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
                <div className="text-center text-white p-4 md:p-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/80 mb-4">
                    Kodembe Car Dealership
                  </p>
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Find The Car That Fits Your Life
                  </h2>
                  <p className="text-sm md:text-base text-white/80 max-w-xl mx-auto mb-6">
                    Hand-picked vehicles, transparent pricing, and local service you can trust.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href="#inventory"
                      className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition duration-150"
                    >
                      Browse Inventory
                    </a>
                    <a
                      href="#financing"
                      className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-150"
                    >
                      Explore Financing
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
