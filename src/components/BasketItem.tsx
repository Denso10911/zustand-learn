import React from "react"
import { ProductT } from "../types/genetal.ts"
import SvgSelector from "./SvgSelector.tsx"
import { useProductStore } from "../store/products.ts"

interface Props {
  product: ProductT
}

const BasketItem: React.FC<Props> = ({ product }) => {
  const remove = useProductStore.use.setRemoveFromBasket()

  const handleRemove = () => {
    remove(product.mal_id)
  }
  return (
    <div className="grid w-full max-w-lg grid-cols-12 items-center gap-5 rounded-md border border-cyan-500 p-2">
      <img
        src={product.images.jpg.small_image_url}
        alt={`image ${product.title}`}
        className="col-span-2 h-10 w-10 object-cover"
      />
      <div className="col-span-7">{product.title}</div>
      <div className="col-span-2">{`$${product.mal_id * 10}`}</div>
      <div className="col-span-1 cursor-pointer" onClick={handleRemove}>
        <SvgSelector id="cross" strokeColor="#ffffff" width={"14px"} height={"14px"} />
      </div>
    </div>
  )
}

export default BasketItem
