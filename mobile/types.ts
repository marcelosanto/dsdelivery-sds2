export type Order = {
  address: string
  id: number
  latitude: number
  longitude: number
  moment: string
  products: Product[]
  status: string
  total: number
}

export type Product = {
  description: string
  id: number
  imageUri: string
  name: string
  price: number
}
