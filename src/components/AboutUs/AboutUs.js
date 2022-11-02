import React from "react";

// Renderiza la seccion "Sobre Nosotros" con descripcion y iframe utilizado de Google Maps
const AboutUs = () => {
  return (
    <div className="w-2/3 mx-auto my-16 p-5 text-gray-700 text-center">
      <h1 className="text-3xl font-semibold">Sobre Nosotros</h1>
      <p className="text-xl p-5">
        Hace mas de 3 años nos dedicamos a la venta de Smartphones de las
        principales marcas y al mejor precio. Nos encontramos en la ciudad de
        Córdoba y hacemos envios a todo el pais para ofrecerte los mejores
        productos hasta la puerta de tu casa.
        <br />
        <br />
        Cientos de clientes avalan nuestra atención y dedicación para ofrecer la
        mejor experiencia de compra.
      </p>
      <h2 className="text-3xl font-semibold mt-10">¿Donde nos encontramos?</h2>
      <p className="text-xl p-5">
        Contamos con una oficina en el centro de Cordoba donde puedes realizar
        el retiro de tu pedido personalmente.{" "}
        <span className="font-semibold">Unicamente con cita previa</span>
      </p>
      <div className="w-4/5 mx-auto">
        <p className="text-xl p-5 font-medium">
          San Martin 165 / Córdoba / Argentina
        </p>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.003436382622!2d-64.18548488511497!3d-31.414031403280887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a282cfaee03f%3A0x4b13d1aa993dfd34!2sSan%20Mart%C3%ADn%20165%2C%20X5000%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1665971780196!5m2!1ses!2sar"
          className="-ml-16 lg:-ml-0 w-80 lg:h-72 lg:w-[34rem]"
          title="ubicacion"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default AboutUs;
