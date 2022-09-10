import { useState, useEffect} from 'react'
import { getProductsById } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

const ItemDetailContainer = () => {
    const [products, setProduct] = useState()
    const [loading, setLoading] = useState(false)
    const {productId} = useParams();

    useEffect(() => {
        setLoading(true)
        getProductsById(productId)
            .then(products => {
                setProduct(products)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
            })
    }, [productId])

    return (
        <div>
          {loading ? <Loader /> : <ItemDetail {...products}/> }
        </div>
    )
}

export default ItemDetailContainer