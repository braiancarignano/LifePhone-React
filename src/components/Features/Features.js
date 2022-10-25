import Candado from "../../assets/candado.png";
import Envio from "../../assets/entrega-rapida.png";
import Ubicacion from "../../assets/mapa.png";

//Renderiza imagen en la seccion "inicio"
const Features = () => {
  return (
    <div className="lg:h-96 w-full lg:flex justify-around text-white text-center mt-3 bg-slate-800 lg:bg-transparent">
      <div className="bg-cover h-96 w-full absolute -z-10 brightness-50 blur-[2px] lg:bg-[url('https://www.xiaomiadictos.com/wp-content/uploads/2021/02/smartphones-menos-resistentes-20201.jpg')]"></div>
      <div className="pt-1">
        <img className="h-12 w-12 mt-24 mx-auto" src={Candado} alt="" />
        <h2 className="text-xl mt-3 font-bold">SEGURIDAD</h2>
        <p className="px-12 mt-3 font-medium">
          Todos nuestros productos cuentan con garantia, estan sellados, y son
          liberados de fabrica.
        </p>
      </div>
      <div>
        <img className="h-12 w-12 mt-24 mx-auto" src={Ubicacion} alt="" />
        <h2 className="text-xl mt-3 font-bold">UBICACIÓN</h2>
        <p className="px-12 mt-3 font-medium">
          Podes retirar tu pedido en nuestras oficinas comerciales en el centro
          de la Ciudad de Cordoba.
        </p>
      </div>
      <div className="pb-14">
        <img className="h-12 w-12 mt-24 mx-auto" src={Envio} alt="" />
        <h2 className="text-xl mt-3 font-bold">ENVIOS</h2>
        <p className="px-12 mt-3 font-medium">
          Realizamos envios a todo el pais. Tambien se realizan envios a
          domicilio para tu mayor comodidad.
        </p>
      </div>
    </div>
  );
};

export default Features;
