import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
const initialState = {
  name: "",
  lastName: "",
  email: "",
  phone: "",
  dni: "",
  city: "",
  address: "",
  codePostal: "",
  note: "",
};

const Form = ({button, product}) => {
  const [data, setData] = useState(initialState);
  const [orderID, setOrderID] = useState("");
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value});
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "orders"), {
      data,
      product,
    });
    // console.log('Document written with ID: ', docRef.id);
    setOrderID(docRef.id);
    setData(initialState);
  };

  return (
    <div>
      <form className="w-2/3 m-auto p-5" onSubmit={onSubmit}>
      <h2 className="text-gray-600 text-2xl font-semibold p-3">Tus Datos</h2>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-500 peer"
            placeholder=" "
            value={data.name}
            onChange={handleOnChange}
          />
          <label
            for="name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Nombre *
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="lastName"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-500 peer"
            placeholder=" "
            value={data.lastName}
            onChange={handleOnChange}
          />
          <label
            for="lastName"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Apellido *
          </label>
        </div>
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <input
          type="email"
          name="email"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-500 peer"
          placeholder=" "
          value={data.email}
          onChange={handleOnChange}
        />
        <label
          for="email"
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email (email@email.com) *
        </label>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="tel"
            name="phone"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-500 peer"
            placeholder=" "
            value={data.phone}
            onChange={handleOnChange}
          />
          <label
            for="phone"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Telefono (123 45678) *
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="dni"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-500 peer"
            placeholder=" "
            value={data.dni}
            onChange={handleOnChange}
          />
          <label
            for="dni"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            D.N.I. *
          </label>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="tel"
            name="city"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-500 peer"
            placeholder=" "
            value={data.city}
            onChange={handleOnChange}
          />
          <label
            for="city"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Localidad / Ciudad *
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="address"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-500 peer"
            placeholder=" "
            value={data.address}
            onChange={handleOnChange}
          />
          <label
            for="address"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Domicilio *
          </label>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="tel"
            name="codePostal"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-500 peer"
            placeholder=" "
            value={data.codePostal}
            onChange={handleOnChange}
          />
          <label
            for="codePostal"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Codigo Postal *
          </label>
        </div>
      </div>
      <h3 className="text-gray-600 text-xl font-medium p-3">
          Informacion Adicional
        </h3>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="note"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-sky-500 peer"
            placeholder=" "
            value={data.note}
            onChange={handleOnChange}
          />
          <label
            for="note"
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
      {orderID && <p>orderID={orderID}</p>}
      </div>
  );
};

export default Form;
