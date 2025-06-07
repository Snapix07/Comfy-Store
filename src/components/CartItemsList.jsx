import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import { nanoid } from '@reduxjs/toolkit'

const CartItemsList = () => {
  const { cartItems } = useSelector((state) => state.cartState)

  return (
    <div>
      {cartItems.map((item) => {
        return <CartItem key={nanoid()} cartItem={item} />
      })}
    </div>
  )
}

export default CartItemsList
