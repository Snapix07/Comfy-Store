import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { formatPrice } from '../utils'

const ProductsGrid = () => {
  const { products } = useLoaderData()

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { title, price, image } = product.attributes
        const dollarsAmount = formatPrice(price)
        return (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
          >
            <figure className="px-4 pt-4">
              <img
                src={image}
                alt={title}
                className="h-64 rounded-xl md:h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body text-center items-center">
              <h2 className="card-title capitalize tracking-wider">{title}</h2>
              <span className="text-secondary font-bold">{dollarsAmount}</span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default ProductsGrid
