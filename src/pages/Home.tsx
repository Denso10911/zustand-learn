import React, { useEffect, useState } from "react"
import { useProductStore } from "../store/products.ts"
import Pagination from "../components/Pagination.tsx"
import Products from "../components/Products.tsx"

interface Props {}

const Home: React.FC<Props> = () => {
  const products = useProductStore.use.products()
  const totalCount = useProductStore.use.totalCount()
  const getAllProducts = useProductStore.use.getAllProducts()
  const [page, setPage] = useState(1)

  useEffect(() => {
    getAllProducts(page)
  }, [page])

  return (
    <div className="container m-auto flex flex-col justify-between gap-5 pt-10">
      <Products products={products} />
      <Pagination page={page} setPage={setPage} totalCount={totalCount} />
    </div>
  )
}

export default Home
