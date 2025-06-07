import React from 'react'
import { formatPrice, generateAmountOptions } from '../utils'
import { editItem, removeItem } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch()
  const { cartID, title, price, image, amount, company, productColor } =
    cartItem
  const removeItemFromTheCart = () => {
    dispatch(removeItem({ cartID }))
  }

  const handleAmount = (e) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }))
  }
  return (
    <article
      key={cartID}
      className="mb-12 flex flex-col gap-y-4 sm:flex-row  border-b border-base-300 pb-6 last:border-b-0"
    >
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
      />
      <div className="sm:ml-16 sm:w-48">
        <h3 className="capitalize font-medium">{title}</h3>
        <h4 className="mt-2 capitalize text-sm text-neutral-content">
          {company}
        </h4>
        <p className="mt-4 capitalize text-sm flex gap-x-2 items-center">
          color :
          <span
            style={{ backgroundColor: productColor }}
            className="badge badge-sm"
          ></span>
        </p>
      </div>
      <div className="sm:ml-12">
        {/* AMOUNT */}
        <div className="fieldset max-w-xs">
          <label htmlFor="amount" className="fieldset-legend p-0">
            <span className="label-text">Amount</span>
          </label>
          <select
            name="amount"
            id="amount"
            className="mt-2 select select-base select-bordered select-xs cursor-pointer "
            value={amount}
            onChange={handleAmount}
          >
            {generateAmountOptions(amount + 5)}
          </select>
        </div>
        {/* REMOVE */}
        <button
          className="mt-2 link link-primary link-hover text-sm"
          onClick={removeItemFromTheCart}
        >
          remove
        </button>
      </div>

      {/* PRICE */}
      <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  )
}

export default CartItem
