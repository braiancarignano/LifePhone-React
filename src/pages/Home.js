import Carousel from "../components/Carrousel/Carrousel";
import "swiper/css/bundle";
import Footer from "../components/Footer/Footer";
import ItemExtra from "../components/ItemExtra/ItemExtra";
import Features from "../components/Features/Features";
import LogoWhatsapp from "../components/LogoWhatsapp/LogoWhatsapp";
//Renderizado de el inicio
const Home = () => {
  return (
    <div>
      <LogoWhatsapp />
      <Carousel />
      <Features />
      <ItemExtra />
      <Footer />
    </div>
  );
};

export default Home;
