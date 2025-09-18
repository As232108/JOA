import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Games() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Olympic Games Highlights
      </h1>

      {/* Image Slider */}
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
            className="w-full h-[400px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1599058917212-1f07e1f6d89a"
            alt="Swimming Competition"
            className="w-full h-[400px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1517649763962-0c623066013b"
            alt="Basketball Match"
            className="w-full h-[400px] object-cover"
          />
        </SwiperSlide>
      </Swiper>

      {/* Content Section */}
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">About the Games</h2>
        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          The Olympic Games are the world’s foremost sporting competition, 
          bringing together athletes from across the globe. Featuring more 
          than 30 sports, from athletics and swimming to basketball and 
          gymnastics, the Games celebrate human achievement, unity, and 
          international friendship. Every four years, millions of people 
          watch as history is made on the Olympic stage.
        </p>
      </div>
    </div>
  );
}
