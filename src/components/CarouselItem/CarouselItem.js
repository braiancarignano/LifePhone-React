import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./CarouselItem";
import { Pagination, Navigation } from "swiper";

// Renderiza carrusel de imagenes en el detalle del producto
export default function App({ imguno, imgdos, imgtres }) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="h-full w-full" src={imguno} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-full w-full" src={imgdos} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-full w-full" src={imgtres} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
