import Swap from "../../assets/iphoneswap.png";
//Renderiza imagen en seccion "inicio" con informacion
const ItemExtra = () => {
  return (
    <div className="w-full bg-slate-800 flex text-white mt-20">
      <div className="p-10 text-center w-1/2">
        <h2 className="text-5xl font-semibold -mt-24 text-slate-800">
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
        <a
          href="https://wa.me/5493517043367"
          className="py-4 w-44 mt-10 mx-auto shadow-lg shadow-slate-500/20 bg-sky-500 text-white rounded-2xl hover:bg-sky-600 active:bg-sky-300 disabled:opacity-50  flex items-center justify-center"
        >
          Más Información
        </a>
      </div>
      <img className="w-2/5 h-full" src={Swap} alt="" />
    </div>
  );
};

export default ItemExtra;
