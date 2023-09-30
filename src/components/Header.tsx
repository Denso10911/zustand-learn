import React from "react"
import { Link } from "react-router-dom"
import SvgSelector from "./SvgSelector.tsx"
import { useProductStore } from "../store/products.ts"

interface Props {}

const Header: React.FC<Props> = () => {
  const selectedToBasket = useProductStore.use.selectedToBasket()

  return (
    <div className="flex h-10 w-full justify-center bg-cyan-950">
      <div className="container flex items-center justify-between">
        <Link to={"/"} className="text-lg font-bold duration-150 hover:scale-105 active:scale-100">
          Amine Shop
        </Link>
        <Link to="/basket" className="duration-150 hover:scale-105 active:scale-100">
          <SvgSelector
            id="basket"
            width="20px"
            height="20px"
            strokeColor={selectedToBasket.length ? "green" : "#ffffff"}
          />
        </Link>
      </div>
    </div>
  )
}

export default Header
