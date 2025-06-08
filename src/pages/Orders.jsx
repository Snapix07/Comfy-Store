import React from 'react'
import { redirect, useLoaderData } from 'react-router-dom'
import { toast } from 'react-toastify'
import { customFetch } from '../utils'
import {
  ComplexPaginationContainer,
  OrdersList,
  SectionTitle,
} from '../components'

const ordersQuery = (user, params) => {
  return {
    queryKey: [
      'orders',
      user.username,
      params.page ? parseInt(params.page) : 1,
    ],
    queryFn: () =>
      customFetch('/orders', {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  }
}

export const loader =
  (store, queryClient) =>
  async ({ request }) => {
    const user = store.getState().userState.user
    if (!user) {
      toast.warn('You must be logged in to orders')
      return redirect('/login')
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ])
    try {
      const resp = await queryClient.ensureQueryData(ordersQuery(user, params))
      return { orders: resp.data.data, meta: resp.data.meta }
    } catch (error) {
      console.log(error)
      const errorMessage =
        error?.response?.data?.error?.message ||
        'there was an error accessing your orders'

      toast.error(errorMessage)
      if (error?.response?.status === 401 || 403) return redirect('/login')

      return null
    }
  }

const Orders = () => {
  const { meta } = useLoaderData()

  if (meta.pagination.total < 1) {
    return <SectionTitle text={'Please make an order'} />
  }

  return (
    <>
      <SectionTitle text={'Your Orders'} />
      <OrdersList />
      <ComplexPaginationContainer />
    </>
  )
}

export default Orders
