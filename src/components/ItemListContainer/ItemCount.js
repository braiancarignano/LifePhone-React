import { useState } from 'react'

const ItemCount = () => {
    const stock = 10
    const [initial, setInitial] = useState(0);
    const onAdd = () => {
        if (initial < stock  ) {
            setInitial(initial + 1);
        }
        else { return; }
    }
    const onDeduce = () => {
        if (initial > 0  ) {
            setInitial(initial - 1);
        }
        else { return; }
    }
  return (
    <div className="inline-flex items-center mt-2">
    <button onClick={onDeduce} className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20 12H4"
        />
      </svg>
    </button>
    <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
      {initial}
    </div>
    <button  onClick={onAdd} className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 4v16m8-8H4"
        />
      </svg>
    </button>
  </div>
  )
}

export default ItemCount
