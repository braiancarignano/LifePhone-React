import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import { Link } from "react-router-dom";

const ItemCartContainer = () => {
  //Importa funciones del context
  const { removeProductInCart, clearCart, cart } = useCartContext();
  //Precio total del producto por cantidad agregada
  const price = cart.map((product) => {
    return product.price * product.quantity;
  });
  //Precio total de productos en carrito
  const totalPrice = price.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  //Cantidad de productos en carrito
  const quantity = cart.map((product) => {
    return product.quantity;
  });
  //Cantidad de productos total en el carrito
  const total = quantity.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  //Renderiza detalle de productos agregados al carrito
  return (
    <div>
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <div className="w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Carrito</h1>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Detalles de Producto
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                Cantidad
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                Subtotal
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                Precio Total
              </h3>
            </div>

            {cart.map((product) => (
              <ItemCart
                key={product.id}
                product={product}
                totalPrice={totalPrice}
                removeProductInCart={removeProductInCart}
              />
            ))}
            <Link to={`/product/`}>
              <button className="flex font-semibold text-sky-500 text-sm mt-10">
                <svg
                  className="fill-current mr-2 text-sky-500 w-4"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Agregar Productos
              </button>
            </Link>
          </div>

          <div id="summary" className="w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Resumen Carrito
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm">
                Total Productos: {total}
              </span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Entrega
              </label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Retiro en Comercio</option>
                <option>Envio a domicilio</option>
              </select>
            </div>
            <div className="py-7">
              <label className="font-semibold inline-block mb-3 text-sm uppercase">
                Codigo de Descuento
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Introduce el codigo"
                className="p-2 text-sm w-full"
              />
            </div>
            <button className="bg-sky-500 hover:bg-sky-600 px-3 py-2 text-sm rounded text-white">
              Aplicar
            </button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Precio Total</span>
                <span>${totalPrice}</span>
              </div>
              <Link to={`/checkout/`}>
                <button className="bg-sky-500 rounded font-semibold hover:bg-sky-600 py-3 text-sm text-white uppercase w-full">
                  Terminar Pedido
                </button>
              </Link>
              <button
                className="py-2 px-4 mt-5 mx-auto shadow-lg shadow-slate-500/50 bg-slate-800 text-white rounded hover:bg-slate-700 active:bg-slate-700 disabled:opacity-50  flex items-center justify-center"
                onClick={() => clearCart()}
              >
                Eliminar Carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCartContainer;
