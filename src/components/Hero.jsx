import React from 'react'
import hero1 from '../assets/hero1.webp'
import hero2 from '../assets/hero2.webp'
import hero3 from '../assets/hero3.webp'
import hero4 from '../assets/hero4.webp'
import { Link } from 'react-router-dom'

const carouselImages = [hero1, hero2, hero3, hero4]

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight">
          We’re changing the way people shop.
        </h1>
        <p className="max-w-xl mt-8 text-lg leading-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
          repudiandae ratione iste magni culpa non magnam molestias alias natus
          quas. Aliquam enim officiis eius excepturi numquam qui quos ullam
          tempora.
        </p>
        <div className="mt-10">
          <Link to="/products" className="btn btn-primary">
            Our Products
          </Link>
        </div>
      </div>
      <div className="h-[28rem] hidden lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Hero
