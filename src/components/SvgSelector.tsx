import React, { useEffect, useRef } from "react"
import cn from "classnames"

interface Props {
  id: string
  width?: string
  height?: string
  strokeColor?: string
  fillColor?: string
  className?: string
}
const SvgSelector: React.FC<Props> = ({ id, width, height, fillColor, strokeColor, className }) => {
  const svgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const svgWrapper = svgRef.current
    if (svgWrapper) {
      const svgElements = svgWrapper.querySelectorAll("svg")
      const pathElements = svgWrapper.querySelectorAll("path")
      const circleElements = svgWrapper.querySelectorAll("circle")
      const rectElements = svgWrapper.querySelectorAll("rect")
      svgElements.forEach(svgElement => {
        if (width) {
          svgElement.setAttribute("width", width)
        }
        if (height) {
          svgElement.setAttribute("height", height)
        }
        if (fillColor) {
          svgElement.setAttribute("fill", fillColor)
        }
      })
      pathElements.forEach(pathElement => {
        if (strokeColor) {
          pathElement.setAttribute("stroke", strokeColor)
        }
        if (fillColor) {
          pathElement.setAttribute("fill", fillColor)
        }
      })
      circleElements.forEach(pathElement => {
        if (strokeColor) {
          pathElement.setAttribute("stroke", strokeColor)
        }
        if (fillColor) {
          pathElement.setAttribute("fill", fillColor)
        }
      })
      rectElements.forEach(pathElement => {
        if (strokeColor) {
          pathElement.setAttribute("stroke", strokeColor)
        }
        if (fillColor) {
          pathElement.setAttribute("fill", fillColor)
        }
      })
    }
  }, [width, height, strokeColor, fillColor])

  const getIcon = () => {
    switch (id) {
      case "cross":
        return (
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="cross">
              <path
                id="Vector"
                d="M15.8334 4.6665L4.16675 16.3332M4.16675 4.6665L15.8334 16.3332"
                stroke="#404B69"
                strokeWidth="1.35833"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        )
      case "basket":
        return (
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 10H21L19 20H5M3 10L4 15M3 10L9 4M18 7L15 4"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )
      case "arrow":
        return (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_351_4606)">
              <path
                d="M15.8334 9.99984H4.16669M4.16669 9.99984L10 15.8332M4.16669 9.99984L10 4.1665"
                stroke="#A0A0AE"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_351_4606">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )

      default:
        return <svg />
    }
  }

  return (
    <div
      data-component="SvgSelector"
      ref={svgRef}
      className={cn(
        "flex items-center justify-center",
        width ? `w-[${width}]` : "",
        height ? `w-[${height}]` : "",
        className || ""
      )}
    >
      {getIcon()}
    </div>
  )
}

export default SvgSelector
