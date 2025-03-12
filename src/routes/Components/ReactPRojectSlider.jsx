import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ReactProjectsSlider = () => {
  return (
    <div className="w-full h-screen">

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className="mySwiper"
      >
        
        <SwiperSlide>
          <div className="w-full h-screen bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: `url('/img/proyecto1.jpg')` }}>
          <h2 className="text-3xl font-bold">Creatividad + Tecnología</h2>
          <p className="text-lg">Transformamos ideas en experiencias digitales con React.js</p>          </div>
        </SwiperSlide> 

        {/* 🖼️ Otras Slides con Imágenes */}
        <SwiperSlide>
          <div className="w-full h-screen bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: `url('/img/proyecto1.jpg')` }}>
            <h2 className="text-3xl font-bold bg-black bg-opacity-50 p-4 rounded-lg">Arquitectura Moderna con React.js</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-screen bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: `url('/img/proyecto2.jpg')` }}>
            <h2 className="text-3xl font-bold bg-black bg-opacity-50 p-4 rounded-lg">Interfaces personalizadas con Tailwind CSS</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-screen bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: `url('/img/proyecto3.jpg')` }}>
            <h2 className="text-3xl font-bold bg-black bg-opacity-50 p-4 rounded-lg">Interactividad optimizada con React Hooks</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ReactProjectsSlider;
