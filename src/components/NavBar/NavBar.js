import {useState} from "react";
import { Link } from "react-router-dom";
import image from "../../assets/LifePhoneLogo.png";
import CardWidget from "../CardWidget/CardWidget";
import DropDown from "../DropDrown/DropDown";

const NavBar = () => {
  const [isOpen , SetIsOpen] = useState (false)
  const getDropDown = () => {
    isOpen === false ? SetIsOpen(true) : SetIsOpen(false)
  };

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-slate-800">
        <Link to="/">
          <div className="flex items-center flex-shrink-0 text-white mr-2">
            <img className=" ml-8 h-16 w-30" src={image} alt="Logo" />
          </div>
        </Link>
        <div className="block lg:hidden">
          <button
            id="boton"
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
        <div
          id="menu"
          className="w-full block mx-auto text-center lg:flex-grow lg:flex lg:items-center lg:w-auto"
        >
          <div className="text-sm lg:flex-grow">
            <Link
              to="/"
              className="block border-b text-left text-lg lg:inline-block lg:mt-0 lg:border-transparent transition ease-in-out delay-150 duration-300 text-white hover:text-sky-400 hover:border-sky-800 lg:mr-28"
            >
              Inicio
            </Link>
            <button
              className="border-b text-left text-lg lg:inline-block lg:mt-0 lg:border-transparent transition ease-in-out delay-150 duration-300 text-white hover:text-sky-400 hover:border-sky-800 lg:mr-28"
              onMouseEnter={getDropDown}
              type="button"
              >
              Productos
            </button>
              {isOpen === true ? <DropDown/> : <></>}    
            <Link
              to="/contact"
              className="block border-b text-left text-lg lg:inline-block lg:mt-0 lg:border-transparent transition ease-in-out delay-150 duration-300 text-white hover:text-sky-400 hover:border-sky-800"
            >
              Contacto
            </Link>
          </div>
          <div>
            <input
              className="rounded-full shadow-inner border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 py-1 px-2 m-8"
              placeholder="¿Qué estás buscando?  🔍︎"
            />
          </div>
          <div className="mr-4">
            <CardWidget />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
