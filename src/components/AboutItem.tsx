import React from "react"

interface Props {
  title: string
  value: string | number
}

const AboutItem: React.FC<Props> = ({ title, value }) => {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-3">{title}</div>
      <div className="col-span-9">{value}</div>
    </div>
  )
}

export default AboutItem
