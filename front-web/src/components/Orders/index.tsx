import { useEffect, useState } from 'react'

import './styles.css'

import StepsHeader from './Steps-Header'
import ProductsList from './ProductsList'
import { Product, OrderLocationdata } from './types'
import { fetchProducts } from '../../api'
import OrderLocation from './OrderLocation'

export default function Orders() {
  const [products, setProducts] = useState<Product[]>([])
  const [orderLocation, setOrderLocation] = useState<OrderLocationdata>()

  useEffect(() => {
    fetchProducts()
      .then((response) => setProducts(response.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className='orders-container'>
      <StepsHeader />
      <ProductsList products={products} />
      <OrderLocation
        onChangeLocation={(location) => setOrderLocation(location)}
      />
    </div>
  )
}
