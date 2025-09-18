import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-black">
        <img
          src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d"
          alt="Olympics Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to the Olympic Games
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Celebrating sportsmanship, unity, and the spirit of competition.
          </p>
        </div>
      </section>

      {/* Slider Section */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Highlights
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="rounded-2xl shadow-lg"
        >
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1602208829840-dfd8dfc14f6b"
              alt="Running Track"
              className="w-full h-[350px] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1599058917212-1f07e1f6d89a"
              alt="Swimming Competition"
              className="w-full h-[350px] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1517649763962-0c623066013b"
              alt="Basketball Match"
              className="w-full h-[350px] object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </section>

      {/* About Section */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            About the Olympic Games
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            The Olympic Games are the world’s largest sporting event, uniting
            athletes from across the globe. With more than 30 sports, the Games
            inspire billions through excellence, teamwork, and international
            friendship. Every four years, history is made as athletes showcase
            their passion and dedication on the grandest stage.
          </p>
        </div>
      </section>
    </div>
  );
}
