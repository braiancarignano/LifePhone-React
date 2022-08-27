import React from 'react'
import image from "./carrito.png"

const CardWidget = () => {
  return (
    <div  className=" flex w-16 mt-4 px-2 py-2 leading-none border rounded-xl shadow-lg transition ease-in-out delay-150 duration-300 shadow-sky-600/40 bg-sky-600 border-white hover:border-transparent hover:bg-sky-400 lg:mt-0">
    <a href="#x">
    <img className='w-6 h-6' src={image} alt="CardWidget"/>
    </a>
    <p className="text-white p-1 ml-1 font-light">5</p>
    </div>
  )
}

export default CardWidget
