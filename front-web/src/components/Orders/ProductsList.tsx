import { checkeSelected } from './helpers'
import ProductCard from './ProductCard'
import { Product } from './types'

type Props = {
  products: Product[]
  selectedProducts: Product[]
  onSelectProduct: (products: Product) => void
}

export default function ProductsList({
  products,
  selectedProducts,
  onSelectProduct,
}: Props) {
  return (
    <div className='orders-list-container'>
      <div className='orders-list-items'>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelectProduct={onSelectProduct}
            isSelected={checkeSelected(selectedProducts, product)}
          />
        ))}
      </div>
    </div>
  )
}
