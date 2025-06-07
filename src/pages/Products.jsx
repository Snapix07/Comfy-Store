import React from 'react'
import { Filters, PaginationContainer, ProductsContainer } from '../components'
import { customFetch } from '../utils'

const url = 'products'

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ])
  const resp = await customFetch(url, { params })

  const products = resp.data.data
  const meta = resp.data.meta
  return { products, meta, params }
}

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  )
}

export default Products
