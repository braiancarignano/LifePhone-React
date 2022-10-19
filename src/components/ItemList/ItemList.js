import Item from '../Item/Item'
//Renderiza lista de productos
const ItemList = ({products}) => {
  return (
    <div className='flex flex-wrap w-full' >
      {products.map(product => 
      <Item key={product.id} {...product}/>
      )}
    </div> 
  )
}

export default ItemList