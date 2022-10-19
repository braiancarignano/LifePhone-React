//Renderizado de seccion Preguntas Frecuentes en seccion de "contacto"
const FrequentQuestions = () => {
  return (
    <div>
      <section className="text-gray-700">
        <div className="container px-12 py-16 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-4xl font-semibold text-center text-gray-700 mb-5">
              Preguntas Frecuentes
            </h1>
            <p className="text-xl leading-relaxed w-3/4 mx-auto mt-5">
              No dudes en revisar nuestras preguntas frecuentes para una mejor
              experiencia en tu compra. <br /> Si aún asi no te resolvimos tu
              inquietud podes comunicarte en alguna de nuestras redes sociales o
              con el formulario de aqui abajo.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="py-3 px-2">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  ¿Como compro?
                </summary>

                <span>
                  Puedes realizar tu pedido a través de la seccion de productos.
                  <br /> Añadi los productos que desees al carrito.
                  <br /> Llena el formulario con tus datos y nos contactaremos
                  contigo para coordinar tu entrega.
                </span>
              </details>
              <details className="py-3 px-2">
                <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                  ¿Se puede pagar a través de la web?
                </summary>

                <span>
                  Por el momento no realizamos venta directa desde la web.{" "}
                  <br />
                  Podes ver los productos y reservarlos para que nos contactemos
                  contigo para coordinar una entrega adecuada.
                </span>
              </details>
              <details className="py-3 px-2">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  ¿Donde retiro mi compra?
                </summary>

                <span>
                  Contamos con una oficina comercial ubicada en el centro de la
                  ciudad de Córdoba donde podras retirar tu pedido con cita
                  previa.
                </span>
              </details>
            </div>
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="py-3 px-2">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  ¿Realizan envios?
                </summary>

                <span>
                  Si, realizamos envios a todo el pais. Tambien contamos con
                  entregas a domicilio en la ciudad de Córdoba.
                </span>
              </details>
              <details className="py-3 px-2">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  ¿Los productos tienen garantia?
                </summary>

                <span>
                  Si, todos nuevos productos cuentan con una garantia minima de
                  90 dias por defectos de fabrica. Siendo mayor a esta con
                  algunas marcas en sus garantias oficiales.
                </span>
              </details>
              <details className="py-3 px-2">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  ¿Los productos son liberados?
                </summary>

                <span>
                  Si, todos nuestros productos son totalmente libres de
                  empresas. Al momento de adquirirlo puedes utilizar cualquier
                  empresa telefonica.
                </span>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FrequentQuestions;
