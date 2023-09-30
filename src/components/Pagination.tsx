import React, { Dispatch, SetStateAction } from "react"
import ReactPaginate from "react-paginate"
import SvgSelector from "./SvgSelector.tsx"

interface Props {
  page: number
  totalCount: number
  setPage: Dispatch<SetStateAction<number>>
}

const Pagination: React.FC<Props> = ({ page, setPage, totalCount }) => {
  return (
    <ReactPaginate
      previousLabel={<SvgSelector id="arrow" strokeColor={"#ffffff"} />}
      nextLabel={<SvgSelector id="arrow" strokeColor={"#ffffff"} />}
      pageCount={totalCount / 25}
      onPageChange={({ selected }) => setPage(selected + 1)}
      containerClassName="flex items-center h-[34px] gap-1.5 justify-center mb-8 font-medium"
      previousLinkClassName="flex px-2.5 cursor-pointer"
      nextLinkClassName="flex px-2.5 cursor-pointer rotate-180"
      disabledLinkClassName="opacity-50"
      pageLinkClassName="cursor-pointer h-10 px-2.5 flex items-center justify-center"
      activeClassName="cursor-pointer h-8 w-max rounded-xl bg-color-white flex items-center justify-center border border-cyan-950"
      breakLinkClassName="block cursor-pointer h-10 pt-4"
      forcePage={page - 1}
    />
  )
}

export default Pagination
