import React from 'react'
import image from "./carrito.png"

const CardWidget = () => {
  return (
    <a href="#x" className="inline-block shadow-lg shadow-sky-600/40  px-3 py-2 leading-none border rounded-xl bg-sky-600 border-white hover:border-transparent hover:bg-sky-400 mt-4 lg:mt-0">
    <img className='w-6 h-6' src={image} alt="CardWidget"/>
    </a>
  )
}

export default CardWidget
