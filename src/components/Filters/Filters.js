import { Link } from "react-router-dom";

const Filters = () => {
  return (

    <div className="list-none w-60">
    <h1 className="font-semibold text-gray-800 text-2xl border-b-4 p-2">Marcas</h1>
    <ul>
      <li className="p-2 text-gray-800 border-b-2 mr-8 font-sans text-lg">
        <Link to="/product/brand/samsung"> Samsung </Link>
      </li>
      <li className="p-2 text-gray-800 border-b-2 mr-8 font-sans text-lg">
        <Link to="/product/brand/xiaomi">  Xiaomi </Link>
      </li>
      <li className="p-2 text-gray-800 border-b-2 mr-8 font-sans text-lg">
        <Link to="/product/brand/apple">  Apple </Link>
      </li>
      <li className="p-2 text-gray-800 border-b-2 mr-8 font-sans text-lg">
        <Link to="/product/brand/motorola">  Motorola </Link>
      </li>
    </ul>
  </div>
  )
}

export default Filters