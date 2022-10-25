import { useState } from "react";
import { Link } from "react-router-dom";
import image from "../../assets/LifePhoneLogo.png";
import CardWidget from "../CardWidget/CardWidget";
import DropDown from "../DropDrown/DropDown";

const NavBar = () => {
  //Declaracion de estado y funcion para menu con opciones para navegar a categorias
  const [isOpen, SetIsOpen] = useState(false);
  const getDropDown = () => {
    isOpen === false ? SetIsOpen(true) : SetIsOpen(false);
  };
  const [openTab, setOpenTab] = useState(false);
  const hiddenMenu = () => {
    openTab === false ? setOpenTab(true) : setOpenTab(false);
  };
  //Renderiza menu de navegacion en la parte superior
  return (
    <div className="sticky top-0 z-50 shadow">
      <nav className="flex items-center justify-between flex-wrap bg-slate-800">
        <Link to="/">
          <div className="flex items-center my-2 flex-shrink-0 text-white mr-2">
            <img className="ml-4 p-1 h-16 w-30" src={image} alt="Logo" />
          </div>
        </Link>
        <div className="block mr-2 lg:hidden">
          <button
            onClick={hiddenMenu}
            className="flex items-center px-3 py-2 border rounded text-sky-200 border-sky-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        {openTab === true ? (
          <></>
        ) : (
          <div
          id="menu"
          className="w-full block mx-auto text-center lg:flex-grow lg:flex lg:items-center lg:w-auto"
        >
          <div className="text-sm py-6 lg:flex-grow">
            <Link to="/">
              <button className="block lg:border-b lg:text-left text-lg lg:inline-block lg:mt-0 lg:border-transparent transition ease-in-out delay-150 duration-300 text-white hover:text-sky-400 hover:border-sky-800 lg:mr-28">
                Inicio
              </button>
            </Link>
            <button
              className="block lg:border-b lg:text-left text-lg lg:inline-block lg:mt-0 lg:border-transparent transition ease-in-out delay-150 duration-300 text-white hover:text-sky-400 hover:border-sky-800 lg:mr-28"
              onClick={getDropDown}
              type="button"
            >
              Productos
            </button>
            {isOpen === true ? <DropDown /> : <></>}
            <Link to="/contact">
              <button className="block lg:border-b lg:text-left text-lg lg:inline-block lg:mt-0 lg:border-transparent transition ease-in-out delay-150 duration-300 text-white hover:text-sky-400 hover:border-sky-800">
                Contacto
              </button>
            </Link>
          </div>
          <div className="mr-4">
            <CardWidget />
          </div>
        </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
