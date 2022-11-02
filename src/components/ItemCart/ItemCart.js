//Renderizado de productos en carrito con su boton para eliminar productos
const ItemCart = ({ product, removeProductInCart }) => {
  //Recupera el precio total de un producto segun la cantidad agregada
  const total = product.price * product.quantity;
  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        <div className="lg:w-20 w-0">
          <img className="invisible lg:visible h-20" src={product.imguno} alt="" />
        </div>
        <div className="flex flex-col justify-between ml-3 flex-grow">
          <span className="font-semibold text-slate-800">{product.name}</span>
          <span className="text-gray-600 text-xs capitalize">
            {product.brand}
          </span>
          <button
            className="w-24 text-left font-semibold hover:text-red-500 text-gray-500 text-xs"
            onClick={() => removeProductInCart(product.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">
        {product.quantity}
      </span>
      <span className="text-center w-1/5 font-semibold text-sm">
        ${product.price}
      </span>
      <span className="text-center w-1/5 font-semibold text-sm">${total}</span>
    </div>
  );
};

export default ItemCart;
