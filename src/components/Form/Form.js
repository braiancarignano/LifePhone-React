import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import MessageModal from "../MessageModal/MessageModal";
import { useForm } from "react-hook-form";

const Form = ({ button, product, action }) => {
  //Desestructura utilidad de libreria para validaciones
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //Declaracion de estados para mostrar ID de compra/consulta
  const [buy, setBuy] = useState(false);
  const [orderID, setOrderID] = useState("");
  //Envio de informacion a base de datos del formulario para compra/consulta
  const onSubmit = async (datos) => {
    const docRef = await addDoc(collection(db, `${action}`), {
      datos,
      product,
    });
    setOrderID(docRef.id);
    setBuy(true);
  };
  //Renderizado de formulario para compra/consulta con sus validaciones y mensajes de error
  return (
    <div>
      {buy ? (
        <MessageModal orderID={orderID} option={action} />
      ) : (
        <form className="w-2/3 m-auto p-5" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-gray-600 text-2xl font-semibold p-3">
            Tus Datos
          </h2>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Tienes que colocar tu nombre",
                  },
                  minLength: {
                    value: 3,
                    message: "Tu nombre debe tener al menos 3 caracteres",
                  },
                })}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-500 peer"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Nombre *
              </label>
              <small className="text-red-400">{errors?.name?.message}</small>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                {...register("lastname", {
                  required: {
                    value: true,
                    message: "Tienes que colocar tu apellido",
                  },
                  minLength: {
                    value: 3,
                    message: "Tu apellido debe tener al menos 3 caracteres",
                  },
                })}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-500 peer"
                placeholder=" "
              />
              <label
                htmlFor="lastName"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Apellido *
              </label>
              <small className="text-red-400">
                {errors?.lastname?.message}
              </small>
            </div>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Tienes que colocar tu email",
                },
                minLength: {
                  value: 3,
                  message: "El email debe tener al menos 3 caracteres",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "El email no es válido",
                },
              })}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-500 peer"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email (email@email.com) *
            </label>
            <small className="text-red-400">{errors?.email?.message}</small>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="number"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Tienes que colocar tu telefono",
                  },
                  minLength: {
                    value: 8,
                    message: "El telefono debe tener al menos 8 números",
                  },
                })}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-500 peer"
                placeholder=" "
              />
              <label
                htmlFor="phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Telefono (12345678) *
              </label>
              <small className="text-red-400">{errors?.phone?.message}</small>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="number"
                {...register("dni", {
                  required: {
                    value: true,
                    message: "Tienes que colocar tu D.N.I.",
                  },
                  minLength: {
                    value: 7,
                    message: "El D.N.I. debe tener al menos 7 números",
                  },
                })}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-500 peer"
                placeholder=" "
              />
              <label
                htmlFor="dni"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                D.N.I. *
              </label>
              <small className="text-red-400">{errors?.dni?.message}</small>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                {...register("city", {
                  required: {
                    value: true,
                    message: "Tienes que colocar tu localidad/ciudad",
                  },
                  minLength: {
                    value: 3,
                    message:
                      "Tu localidad/ciudad debe tener al menos 3 caracteres",
                  },
                })}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-500 peer"
                placeholder=" "
              />
              <label
                htmlFor="city"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Localidad / Ciudad *
              </label>
              <small className="text-red-400">{errors?.city?.message}</small>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                {...register("address", {
                  required: {
                    value: true,
                    message: "Tienes que colocar tu domicilio",
                  },
                  minLength: {
                    value: 3,
                    message: "Tu domicilio debe tener al menos 3 caracteres",
                  },
                })}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-500 peer"
                placeholder=" "
              />
              <label
                htmlFor="address"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Domicilio *
              </label>
              <small className="text-red-400">{errors?.address?.message}</small>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="number"
                {...register("codePostal", {
                  required: {
                    value: true,
                    message: "Tienes que colocar tu codigo postal",
                  },
                  minLength: {
                    value: 2,
                    message: "El codigo postal debe tener al menos 2 números",
                  },
                })}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-500 peer"
                placeholder=" "
              />
              <label
                htmlFor="codePostal"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Codigo Postal *
              </label>
              <small className="text-red-400">
                {errors?.codePostal?.message}
              </small>
            </div>
          </div>
          <h3 className="text-gray-600 text-xl font-medium p-3">
            Informacion Adicional
          </h3>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              {...register("note")}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-500 peer"
              placeholder=" "
            />
            <label
              htmlFor="note"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Notas (opcional)
            </label>
          </div>
          <button
            type="submit"
            className=" bg-sky-500 rounded font-semibold hover:bg-sky-600 p-3 my-3 text-white"
          >
            {button}
          </button>
        </form>
      )}
    </div>
  );
};

export default Form;
