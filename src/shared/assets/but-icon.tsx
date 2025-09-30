import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g
      stroke="#543C52"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      clipPath="url(#a)"
    >
      <path d="M1.666 5a3.333 3.333 0 0 1 3.333-3.333h10A3.334 3.334 0 0 1 18.333 5v10a3.333 3.333 0 0 1-3.334 3.333H5A3.333 3.333 0 0 1 1.666 15V5Z" />
      <path d="M7.083 9.167a2.083 2.083 0 1 0 0-4.167 2.083 2.083 0 0 0 0 4.167ZM12.105 10.518 5 18.333h10.11a3.223 3.223 0 0 0 3.223-3.222V15c0-.39-.145-.538-.408-.826l-3.358-3.662a1.665 1.665 0 0 0-2.462.005Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent