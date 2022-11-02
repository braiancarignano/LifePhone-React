import { useState } from "react";
import AboutUs from "../AboutUs/AboutUs";
import FrequentQuestions from "../FrequentQuestions/FrequentQuestions"
//Renderiza botones para secciones "Sobre Nosotros"/"Preguntas Frecuentes"
const TabsContact = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div>
            <div className="container mx-auto mt-12">
                <div className="flex flex-col items-center justify-center">
                    <ul className="flex">
                        <li>
                            <button
                                onClick={() => setOpenTab(1)}
                                className={` ${openTab === 1 ? "bg-gray-200 text-white" : ""} inline-block px-10 lg:px-20 py-2 text-gray-600 rounded-xl`}
                            >
                                Sobre Nosotros
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setOpenTab(2)}
                                className={` ${openTab === 2 ? "bg-gray-200 text-white" : ""} inline-block px-10 lg:px-20 py-2 text-gray-600 rounded-xl`}
                            >
                                Preguntas Frecuentes
                            </button>
                        </li>
                    </ul>
                    <div className="p-3 mt-6 bg-gray-300 rounded-xl shadow-lg mb-10">
                        <div className={openTab === 1 ? "block" : "hidden"}>
                            {" "}
                           <AboutUs/>
                        </div>
                        <div className={openTab === 2 ? "block" : "hidden"}>
                            <FrequentQuestions/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default TabsContact;
