import { useNavigate, useParams } from "react-router-dom"
import { useProductStore } from "../store/products.ts"
import { useEffect, useMemo } from "react"
import AboutItem from "../components/AboutItem.tsx"
import SvgSelector from "../components/SvgSelector.tsx"
import BackButton from "../components/BackButton.tsx"

const Product = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const product = useProductStore.use.selectedProduct()
  const getProductById = useProductStore.use.getProductById()
  const selectedToBasket = useProductStore.use.selectedToBasket()
  const setSelectedToBasket = useProductStore.use.setSelectedToBasket()

  const isProductSelected = useMemo(() => {
    return selectedToBasket.some(el => el.mal_id === product?.mal_id)
  }, [selectedToBasket, product])

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        await getProductById(id)
      }
      fetchProduct()
    }
  }, [id])

  const handleSelect = () => {
    if (!isProductSelected) {
      setSelectedToBasket(product!)
    }
    navigate("/basket")
  }

  if (product) {
    return (
      <div className="container mx-auto grid grid-cols-12 gap-10 pt-10">
        <BackButton />
        <div className="col-span-4 flex flex-col gap-5 rounded-2xl bg-cyan-950 p-6">
          <img
            src={product.images.jpg.large_image_url}
            alt={`main poster ${product.title}`}
            className="rounded-2xl"
          />
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <AboutItem title="Year:" value={product.year} />
              <AboutItem title="Duration:" value={product.duration} />
              <AboutItem
                title="Rating:"
                value={`${product.score} / 10 (${product.scored_by} votes)`}
              />
              <AboutItem
                title="Producers:"
                value={`${product.producers.map(el => ` ${el.name}`)}`}
              />
              <AboutItem
                title="Licensors:"
                value={`${product.licensors.map(el => ` ${el.name}`)}`}
              />
              <AboutItem title="Genres:" value={`${product.genres.map(el => ` ${el.name}`)}`} />
              <AboutItem title="Status:" value={product.status} />
            </div>
          </div>
        </div>

        <div className="col-span-8 flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold">{product.title}</h1>
            <div
              className="flex cursor-pointer gap-2 rounded-md bg-cyan-400 p-2 text-cyan-950 duration-150 hover:scale-105 active:scale-100"
              onClick={handleSelect}
            >
              <SvgSelector id="basket" width="20px" height="20px" strokeColor={"#000000"} />{" "}
              {isProductSelected ? "To basket" : "Buy"}
            </div>
          </div>
          {product.synopsis && (
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold">About:</h2>
              <div>{product.synopsis}</div>
            </div>
          )}
          {product.background && (
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold">Background:</h2>
              <div>{product.background}</div>
            </div>
          )}
        </div>
      </div>
    )
  }
  return <div>"Loading..."</div>
}

export default Product
