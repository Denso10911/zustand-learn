import SvgSelector from "./SvgSelector.tsx"
import { Link } from "react-router-dom"

const BackButton = () => {
  return (
    <Link
      to={"/"}
      className="col-span-full flex cursor-pointer items-center gap-3 duration-150 hover:gap-2"
    >
      <SvgSelector id="arrow" strokeColor="#ffffff" width="15px" height="15px" /> Back
    </Link>
  )
}

export default BackButton
