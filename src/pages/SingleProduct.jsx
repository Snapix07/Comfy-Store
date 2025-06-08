import React, { useState } from 'react'
import { customFetch, formatPrice, generateAmountOptions } from '../utils'
import { Link, useLoaderData } from 'react-router-dom'
import { addItem } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

const singleProductQuery = (id) => {
  return {
    queryKey: ['singleProduct', id],
    queryFn: () => customFetch(`/products/${id}`),
  }
}

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const response = await queryClient.ensureQueryData(
      singleProductQuery(params.id)
    )
    return { product: response.data.data }
  }

const SingleProduct = () => {
  const { product } = useLoaderData()
  const { image, title, price, description, colors, company } =
    product.attributes
  const dollarsAmount = formatPrice(price)
  const [productColor, setProductColor] = useState(colors[0])
  const [amount, setAmount] = useState(1)

  const dispatch = useDispatch()

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value))
  }

  const cartProduct = {
    cartID: product.id + productColor,
    productId: product.id,
    image,
    title,
    price,
    company,
    productColor,
    amount,
  }

  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }))
  }
  return (
    <section>
      <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {/* Content */}
      <div className="grid mt-6 lg:grid-cols-2 gap-16">
        <img
          src={image}
          alt={title}
          className="h-96 w-96 object-cover rounded-box lg:w-full"
        />
        <div>
          <h1 className="text-3xl capitalize font-bold">{title}</h1>
          <h4 className="font-bold text-xl mt-2 text-neutral-content">
            {company}
          </h4>
          <p className="mt-3 text-xl">{dollarsAmount}</p>
          <p className="mt-6 leading-8">{description}</p>

          {/* Colors */}
          <div className="mt-5 font-medium text-md tracking-wider ">
            <h4>Colors</h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`badge mr-2 w-6 h-6 cursor-pointer ${
                      color === productColor && 'border-2 border-primary'
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                )
              })}
            </div>
          </div>
          {/* Amount */}
          <fieldset className="fieldset pb-4 max-w-xs">
            <legend className="fieldset-legend ">
              <h4 className="text-sm font-medium tracking-wider">Amount</h4>
            </legend>
            <select
              value={amount}
              className="select select-secondary select-md"
              onChange={handleAmount}
            >
              {generateAmountOptions(20)}
            </select>
          </fieldset>
          <div className="mt-10">
            <button
              type="button"
              className="btn btn-secondary btn-md uppercase"
              onClick={addToCart}
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleProduct
