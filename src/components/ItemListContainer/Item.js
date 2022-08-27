import React from "react";

const Item = ({ info }) => {
  return (
    <div className="w-80 m-8 bg-white shadow-xl rounded-xl ">
      <div className="h-48 w-full rounded-t-xl bg-slate-800 flex flex-col justify-center bg-cover bg-center">
        <img
          className="h-56 w-full rounded-t-xl"
          src={info.thumbnail}
          alt="Imagen Producto"
        />
      </div>
      <div className="p-4 flex flex-col items-center">
        <p className="text-gray-800 text-sm	font-extralight text-center">
          {info.platform}
        </p>
        <h1 className="text-gray-800 font-bold text-center mt-1">
          {info.title}
        </h1>
        <p className="text-center text-gray-800 mt-1">
          {info.short_description}
        </p>
      </div>
    </div>
  );
};

export default Item;
