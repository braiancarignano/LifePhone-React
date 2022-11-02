import Swap from "../../assets/iphoneswap.png";
//Renderiza imagen en seccion "inicio" con informacion
const ItemExtra = () => {
  return (
    <div className="w-full bg-slate-800 lg:flex text-white mt-28 lg:mt-20">
      <div className="p-10 text-center lg:w-1/2">
        <h2 className="text-5xl font-semibold -mt-36 lg:-mt-24 text-slate-800">
          EQUIPOS TESTER <p className="my-3 text-white">SEMINUEVOS</p>
        </h2>
        <h3 className="mt-14 text-2xl font-semibold">
          ¿Que son los equipos tester o seminuevos?
        </h3>
        <p className="mt-4">
          Son productos reacondicionados y testeados previamente para volver a
          la vida.
        </p>
        <h3 className="mt-14 text-2xl font-semibold">
          ¿Que beneficio tengo comprando un equipo tester?
        </h3>
        <p className="mt-4">
          Puedes conseguir equipos de mayor gama a un menor precio y con la
          confianza de que son garantizados por tecnicos que realizan un test a
          todas sus funciones. Además ayudas a prevenir el impacto a el medio
          ambiente.
        </p>
      </div>
      <img className="lg:w-2/5 h-full m-auto" src={Swap} alt="iphone swap" />
      <div className="pb-5 lg:absolute lg:mt-96 lg:ml-64">
       <a
          href="https://wa.me/5493517043367"
          target="blank_"
          className="py-4 w-44 mb-10 mx-auto shadow-lg shadow-slate-500/20 bg-sky-500 text-white rounded-2xl hover:bg-sky-600 active:bg-sky-300 disabled:opacity-50  flex items-center justify-center"
        >
          Más Información
        </a>
        </div>
    </div>
  );
};

export default ItemExtra;
