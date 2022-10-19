import { Link } from "react-router-dom";

//Renderiza menu desplegable al hacer click en el boton "Productos" del navegador
const DropDown = () => {
  return (
    <div className="relative inline-block text-left">
      <div
        className="absolute right-9 z-10 p-3 mt-4 w-56 rounded-lg border-2  bg-white shadow-lg ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
      >
        <div className="py-1" role="none">
          <Link to={`/product/brand/apple`}>
            <button
              className="text-gray-700 border-b-2 block w-full text-left px-4 py-1 text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-2"
            >
              Apple
            </button>
          </Link>
          <Link to={`/product/brand/samsung`}>
            <button
              className="text-gray-700 border-b-2 block w-full text-left px-4 py-1 text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
              Samsung
            </button>
          </Link>
          <Link to={`/product/brand/xiaomi`}>
            <button
              className="text-gray-700 border-b-2 block w-full text-left px-4 py-1 text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-1"
            >
              Xiaomi
            </button>
          </Link>
          <Link to={`/product/brand/motorola`}>
            <button
              className="text-gray-700 border-b-2 block w-full text-left px-4 py-1 text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-1"
            >
              Motorola
            </button>
          </Link>
          <Link to={`/product`}>
            <button
              className="text-gray-700 block px-4 pt-4 w-full text-left text-sm font-medium"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-1"
            >
              Ver Todos
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
