import React from "react"
import { ProductT } from "../types/genetal.ts"
import ProductCard from "./ProductCard.tsx"

interface Props {
  products: ProductT[]
}

const Products: React.FC<Props> = ({ products }) => {
  return (
    <div className="m-auto grid max-w-[1200px] grid-cols-5 gap-3">
      {products?.map(el => <ProductCard key={el.mal_id} product={el} />)}
    </div>
  )
}

export default Products
