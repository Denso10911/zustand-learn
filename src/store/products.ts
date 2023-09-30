import { create } from "zustand"
import { productsApi } from "../api/productsApi.ts"
import { devtools } from "zustand/middleware"
import { ProductT } from "../types/genetal.ts"
import { createSelectors } from "../utils/createSelectors.ts"

type ProductsState = {
  products: ProductT[]
  selectedProduct: ProductT | null
  totalCount: number
  selectedToBasket: ProductT[]
}

type ProductsActions = {
  setSelectedToBasket: (product: ProductT) => void
  setRemoveFromBasket: (id: number) => void
  getAllProducts: (page: number) => void
  getProductById: (id: string) => void
}

export const useProductStore = createSelectors(
  create<ProductsState & ProductsActions>()(
    devtools(set => ({
      products: [],
      selectedToBasket: [],
      selectedProduct: null,
      totalCount: 1,
      setSelectedToBasket: (product: ProductT) => {
        set(state => ({ ...state, selectedToBasket: [...state.selectedToBasket, product] }))
      },
      setRemoveFromBasket: (id: number) => {
        set(state => ({
          ...state,
          selectedToBasket: state.selectedToBasket.filter(el => el.mal_id !== id),
        }))
      },
      getAllProducts: async (page: number) => {
        const res = await productsApi.getProducts(page)
        const data = await res.data
        set(state => ({ ...state, products: data.data }))
        set(state => ({ ...state, totalCount: data.pagination.items.total }))
      },
      getProductById: async (id: string) => {
        const res = await productsApi.getProductById(id)
        const data = await res.data
        set(state => ({ ...state, selectedProduct: data.data }))
      },
    }))
  )
)
