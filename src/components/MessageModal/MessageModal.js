import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import logoWhatsapp from "../../assets/whatsappcontact.png";
//Renderiza mensaje con ID de compra/consulta y al finalizar (boton "volver a inicio") elimina informacion en carrito
const MessageModal = ({ orderID, option }) => {
  const { clearCart } = useCartContext();
  return (
    <div className="w-2/3 m-auto h-full md:h-auto">
      <div className="bg-gray-100 border border-sky-500 rounded-lg shadow">
        <div className="p-6 text-center">
          <h3 className="mb-5 p-3 text-lg font-normal text-gray-600 ">
            Gracias por tu {option}, con el siguiente codigo podremos hacer el
            seguimiento y nos pondremos en contacto contigo.
          </h3>
          <p className="text-gray-600 mb-3 ">
            El codigo de identificacion de tu {option} es:
          </p>
          <p className="text-sky-500 mb-3 text-xl lg:text-3xl">{orderID}</p>
          <a target="blank_" href="https://wa.me/5493517043367">
            <button className=" px-3 py-1 mt- mx-auto shadow-lg shadow-green-500/30 bg-[#29A71A] text-white rounded disabled:opacity-50  flex items-center justify-center">
              <img
                className="h-10 w-10"
                src={logoWhatsapp}
                alt="logo whatsapp"
              />
              Contactate
            </button>
          </a>
          <Link to={`/`}>
            <button
              onClick={() => clearCart()}
              className="py-3 px-3 mt-3 mx-auto shadow-lg shadow-sky-500/30 bg-sky-500 text-white rounded hover:bg-sky-600 active:bg-sky-300 disabled:opacity-50  flex items-center justify-center"
            >
              Volver a Inicio
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
