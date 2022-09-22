import React from 'react'

const DropDown = () => {
  return (
<div className="relative inline-block text-left">
  <div className="absolute right-9 z-10 p-3 mt-4 w-56 rounded-lg border-2  bg-white shadow-lg ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div className="py-1" role="none">
      <a href="/product/brand/apple" className="text-gray-700 border-b-2 block px-4 py-1 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Apple</a>
      <a href="/product/brand/samsung" className="text-gray-700 border-b-2 block px-4 py-1 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Samsung</a>
      <a href="/product/brand/xiaomi" className="text-gray-700 border-b-2 block px-4 py-1 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Xiaomi</a>
      <a href="/product" className="text-gray-700 block px-4 pt-4 text-sm font-medium" role="menuitem" tabindex="-1" id="menu-item-1">Todas las categorias</a>
    </div>
  </div>
</div>
  )
}

export default DropDown