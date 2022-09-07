import React from 'react'
import { useEffect, useState } from 'react'
import { getProducts,  getProductsByMemory , getProductsByBrand} from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'


const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false)
  const { brandId, memoryId } = useParams()

  useEffect(() => {
    setLoading(true)

    if(!brandId && !memoryId ){
      getProducts().then(products => {
        setProducts(products)
        setLoading(false)
          })
    }
    else if(brandId){
      getProductsByBrand(brandId).then(products => {
        setProducts(products)
        setLoading(false)
      })
    }
    
    else{
      getProductsByMemory(memoryId).then(products => {
        setProducts(products)
        setLoading(false)
      })
    }

  }, [brandId, memoryId])
  
  return (
    <div>
      {loading ? <Loader /> : <ItemList products={products}/> }
    </div>
  )
}

export default ItemListContainer