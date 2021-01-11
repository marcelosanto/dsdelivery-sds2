import { useEffect, useState } from 'react'

import './styles.css'

import StepsHeader from './Steps-Header'
import ProductsList from './ProductsList'
import { Product } from './types'
import { fetchProducts } from '../../api'

export default function Orders() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetchProducts()
      .then((response) => setProducts(response.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className='orders-container'>
      <StepsHeader />
      <ProductsList products={products} />
    </div>
  )
}
