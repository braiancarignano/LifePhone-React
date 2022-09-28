import { useCartContext } from "../../context/CartContext";

const ItemCart = ({product}) => {
    const { removeProductInCart} = useCartContext();
  return (
    <div className='flex m-4 rounded-2xl border-4 border-slate-800 '>
    <div>
      <img src={product.img} className="w-38 h-32" alt=""></img>
    </div>
    <div className="w-full">
      <ul className="flex justify-around p-8">
        <div className='mx-10'>
        <h3 className="text-lg font-bold">Marca:</h3>
        <li className="font-semibold my-2 text-center capitalize">{product.brand}</li>
        </div>
        <div className='mx-10'>
        <h3 className="text-lg font-bold">Producto:</h3>
        <li className="font-semibold my-2 text-center">{product.name}</li>
        </div>
        <div className='mx-10'>
        <h3 className="text-lg font-bold">Precio:</h3>
        <li className="font-semibold my-2 text-center">${product.price}</li>
        </div>
        <div className='mx-10'>
        <h3 className="text-lg font-bold">Cantidad:</h3>
        <li className="font-semibold my-2 text-center">{product.quantity}</li>
        </div>
      <button
        className="p-2 rounded-xl shadow-slate-500/50 bg-red-600 hover:bg-red-500 active:bg-red-300"
        onClick={() => removeProductInCart(product.id)}
      >
        <img src="https://res.cloudinary.com/braian/image/upload/v1663252093/trash_1_emme4a.png" alt=""></img>
      </button>
      </ul>
    </div>
  </div>
  )
}

export default ItemCart