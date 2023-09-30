import React from "react"
import { ProductT } from "../types/genetal.ts"
import { Link } from "react-router-dom"

interface Props {
  product: ProductT
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Link
      to={`/product/${product.mal_id}`}
      className="group relative flex h-[400px] w-[225px] cursor-pointer flex-col overflow-hidden rounded-2xl border-2 border-cyan-800"
    >
      <img
        src={product.images.jpg.image_url}
        alt={`poster ${product.title_english}`}
        className="h-[320px] w-[225px] overflow-hidden rounded-tl-2xl rounded-tr-3xl object-cover duration-[5000ms] group-hover:scale-110"
      />

      <div className="flex flex-1 flex-col items-center justify-center bg-cyan-950 p-2">
        <h2 className="text-center text-lg font-bold">{product.title}</h2>
        <p>{`${product.aired.prop.from.year} - ${product.aired.prop.to.year || "..."}`}</p>
      </div>
      <p className="absolute right-0 top-[-5px] z-20 flex w-[80px] justify-center text-2xl font-bold text-orange-400">
        {product.score || 1}
      </p>
      <div className="absolute right-[-25px] top-[-30px] z-10 h-[60px] w-[110px] rounded-full bg-cyan-800" />
      <div className="absolute right-0 top-[30px] h-[10px] w-[10px] rounded-full shadow-[5px_-5px_0_0_rgba(21,94,117,1)]" />
      <div className="absolute right-[84px] top-0 h-[10px] w-[10px] rounded-full shadow-[5px_-5px_0_0_rgba(21,94,117,1)]" />
    </Link>
  )
}

export default ProductCard
