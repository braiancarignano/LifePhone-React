import Form from "../components/Form/Form";
import Footer from "../components/Footer/Footer";
import { useCartContext } from "../context/CartContext";
import TabsContact from "../components/TabsContact/TabsContact";
import LogoWhatsapp from "../components/LogoWhatsapp/LogoWhatsapp";

const Contact = () => {
  const { cart } = useCartContext();
  //Renderizado seccion para contactar o ver mas informacion de la empresa
  return (
    <div>
      <LogoWhatsapp />
      <TabsContact />
      <h1 className="text-4xl font-semibold text-gray-700 text-center">
        Realiza tu consulta
      </h1>
      <h2 className="text-xl font-medium text-gray-700 text-center mt-6">
        Si te quedaste con alguna duda, puedes comunicarte con nosotros aquí.
      </h2>
      <Form button="Realizar Consulta" product={cart} action="consulta" />
      <Footer />
    </div>
  );
};

export default Contact;
