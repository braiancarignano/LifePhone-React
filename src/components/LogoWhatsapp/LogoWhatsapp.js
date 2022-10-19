import logoWhatsapp from "../../assets/whatsappcontact.png";
//Renderiza un boton que se encuentra en todas las secciones para una comunicacion mas efectiva
const LogoWhatsapp = () => {
  return (
    <div className="fixed bottom-10 right-10 z-50 ">
      <a href="https://wa.me/5493517043367" target="_blank" rel="noreferrer">
        <img className="h-16 w-16" src={logoWhatsapp} alt="logo whatsapp" />
      </a>
    </div>
  );
};

export default LogoWhatsapp;
