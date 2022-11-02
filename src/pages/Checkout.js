import { useCartContext } from "../context/CartContext";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import LogoWhatsapp from "../components/LogoWhatsapp/LogoWhatsapp";

const Checkout = () => {
  const { cart } = useCartContext();
  //Renderizado de Checkout final para confirmacion de pedido con datos de pedido y formulario
  return (
    <div>
      <LogoWhatsapp />
      <div className="w-4/5 m-auto p-5">
        <h1 className="text-gray-600 text-3xl font-semibold p-2">
          Confirmacion de Pedido
        </h1>
        <p className="text-gray-600 text-xl font-thin">
          Al realizar el pedido uno de nuestros vendedores se pondra en contacto
          contigo para completar la compra, por eso es{" "}
          {<span className="font-medium text-base">NECESARIO</span>} que
          completes tus datos con informacion veridica.
        </p>
      </div>
      <div className="w-4/5 m-auto p-5">
        <h2 className="text-gray-600 text-2xl font-semibold p-3">Tu Pedido</h2>
        {cart.map((product) => (
          <div
            key={product.id}
            className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
          >
            <div className="w-0 lg:w-20">
              <img className="h-0 lg:h-20" src={product.imguno} alt="" />
            </div>
            <div className="flex flex-col justify-between ml-4 flex-grow">
              <span className="font-semibold text-slate-800">
                {product.name}
              </span>
              <span className="text-gray-600 text-xs capitalize">
                {product.brand}
              </span>
            </div>
            <span className="text-center mx-1 w-1/5 font-semibold text-sm">
              <span className="font-thin">Cantidad: </span>x {product.quantity}
            </span>
            <span className="text-center mx-1 w-1/5 font-semibold text-sm">
              <span className="font-thin">Subtotal: </span>${product.price}
            </span>
            <span className="text-center mx-1 w-1/5 font-semibold text-sm">
              <span className="font-thin">Total: </span>$
              {product.price * product.quantity}
            </span>
          </div>
        ))}
      </div>
      <Form
        button="Realizar Pedido"
        key={cart.id}
        product={cart}
        action="compra"
      />
      <Footer />
    </div>
  );
};

export default Checkout;
