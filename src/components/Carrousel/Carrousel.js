import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carrousel";
import { Autoplay, Pagination, Navigation } from "swiper";

//Renderiza carrusel de imagenes en la seccion de inicio
export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full">
            <h2 className="text-5xl font-semibold rounded-xl text-center mt-20 absolute top-0 right-6 w-96 p-4 bg-slate-800 bg-opacity-90 text-white">
              XIAOMI
            </h2>
            <p className="text-xl font-thin rounded-2xl absolute right-6 my-48 text-center px-8 py-3 bg-slate-800 bg-opacity-90 text-white">
              La marca que se adapta a todos los presupuestos, con el mejor
              calidad/precio del mercado.
            </p>
            <Link to={`/product/brand/xiaomi`}>
              <button className="py-4 px-6 absolute mt-72 right-6 shadow-lg shadow-slate-500/50 bg-sky-500 text-white rounded-2xl hover:bg-sky-600 active:bg-sky-300 disabled:opacity-50  flex items-center justify-center">
                Conocer Más
              </button>
            </Link>
          </div>
          <img
            className="h-screen w-full"
            src="https://d500.epimg.net/cincodias/imagenes/2021/10/22/smartphones/1634904701_456290_1634904911_noticia_normal_recorte1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <h2 className="text-5xl font-semibold rounded-xl text-center mt-20 absolute top-0 left-6 w-96 p-4 bg-slate-800 bg-opacity-90 text-white">
              SAMSUNG
            </h2>
            <p className="text-xl font-thin rounded-2xl absolute left-6 my-48 text-center px-8 py-3 bg-slate-800 bg-opacity-90 text-white">
              Contamos con una gran variedad de Smartphones de la marca nuevos y
              usados.
            </p>
            <Link to={`/product/brand/samsung`}>
              <button className="py-4 px-6 absolute mt-72 left-6 shadow-lg shadow-slate-500/50 bg-sky-500 text-white rounded-2xl hover:bg-sky-600 active:bg-sky-300 disabled:opacity-50  flex items-center justify-center">
                Conocer Más
              </button>
            </Link>
          </div>
          <img
            className="h-screen w-full"
            src="https://d500.epimg.net/cincodias/imagenes/2021/10/26/smartphones/1635258622_674244_1635258945_noticia_normal_recorte1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <h2 className="text-5xl font-semibold rounded-xl text-center mt-20 absolute top-0 right-6 w-96 p-4 bg-slate-800 bg-opacity-90 text-white">
              APPLE
            </h2>
            <p className="text-xl font-thin rounded-2xl absolute right-6 my-48 text-center px-8 py-3 bg-slate-800 bg-opacity-90 text-white">
              Te ofrecemos los mejores IPhone's nuevos y usados. Recibimos el
              anterior en forma de pago y te llevas el nuevo a casa.
            </p>
            <Link to={`/product/brand/apple`}>
              <button className="py-4 px-6 absolute mt-72 right-6 shadow-lg shadow-slate-500/50 bg-sky-500 text-white rounded-2xl hover:bg-sky-600 active:bg-sky-300 disabled:opacity-50  flex items-center justify-center">
                Conocer Más
              </button>
            </Link>
          </div>
          <img
            className="h-screen w-full"
            src="https://d500.epimg.net/cincodias/imagenes/2022/08/25/smartphones/1661432408_383843_1661432496_noticia_normal_recorte1.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
