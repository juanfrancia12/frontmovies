import Slider from "@organisms/slider"
import React from "react"
import { Link } from "react-router-dom"

interface Props {
  title: string
  href: string
  children: React.ReactNode
}

const Carousel = ({ title, href, children }: Props): JSX.Element => {
  return (
    <div className="container mx-auto 2xl:px-40 px-2 py-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className=" text-3xl">{title}</h2>
        <Link to={href}>
          <span className="bg-gray-700/40 text-white/80 py-2 px-5 rounded-md border border-white/40 hover:bg-gray-700/60 active:bg-gray-700/90">
            Ver más
          </span>
        </Link>
      </div>
      <Slider>{children}</Slider>
    </div>
  )
}

export default Carousel

/*
bg-gray-700/80 text-white py-3 px-5 rounded-md border border-white/80 hover:bg-gray-700 active:bg-gray-600
*/
