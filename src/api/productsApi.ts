import { instance } from "./baseUrl.ts"

export const productsApi = {
  getProducts(page: number) {
    return instance.get(`v4/anime?page=${page}`)
  },
  getProductById(id: string) {
    return instance.get(`v4/anime/${id}/full`)
  },
}
