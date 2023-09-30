import React from "react"
import { useProductStore } from "../store/products.ts"
import BasketItem from "./BasketItem.tsx"
import BackButton from "./BackButton.tsx"

interface Props {}

const Basket: React.FC<Props> = () => {
  const selectedToBasket = useProductStore.use.selectedToBasket()

  return (
    <div className="container mx-auto flex flex-col gap-5 pt-10">
      <BackButton />
      <div className="flex flex-col items-center gap-2">
        {selectedToBasket.map(el => (
          <BasketItem key={el.mal_id} product={el} />
        ))}
      </div>
      <div className="mx-auto flex w-full max-w-lg flex-col items-end gap-2">
        <div>
          Total Price: <b>${selectedToBasket.reduce((acc, el) => acc + el.mal_id * 10, 0)}</b>
        </div>
        <button className="cursor-pointer rounded-md border border-cyan-500 px-2 py-1 duration-150 hover:scale-105 active:scale-100">
          Buy
        </button>
      </div>
    </div>
  )
}

export default Basket
