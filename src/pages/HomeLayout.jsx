import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import { Header, Navbar, Loading } from '../components'

const HomeLayout = () => {
  const { state } = useNavigation()
  const isPageLoading = state === 'loading'
  return (
    <>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <div className="align-element py-20">
          <Outlet />
        </div>
      )}
    </>
  )
}

export default HomeLayout
