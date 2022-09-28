const ItemCart = ({ product, removeProductInCart }) => {
  const total = product.price * product.quantity;
  return (
    <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div class="flex w-2/5">
        <div class="w-20">
          <img class="h-20" src={product.img} alt="" />
        </div>
        <div class="flex flex-col justify-between ml-4 flex-grow">
          <span class="font-semibold text-slate-800">{product.name}</span>
          <span class="text-gray-600 text-xs capitalize">{product.brand}</span>
          <button
            class="w-24 text-left font-semibold hover:text-red-500 text-gray-500 text-xs"
            onClick={() => removeProductInCart(product.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
      <span class="text-center w-1/5 font-semibold text-sm">
        {product.quantity}
      </span>
      <span class="text-center w-1/5 font-semibold text-sm">
        ${product.price}
      </span>
      <span class="text-center w-1/5 font-semibold text-sm">${total}</span>
    </div>
  );
};

export default ItemCart;
