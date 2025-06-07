import React from 'react'
import { FormInput, SubmitBtn } from '../components'
import { Form, Link, redirect, useNavigate } from 'react-router-dom'
import { customFetch } from '../utils'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { loginUser } from '../features/user/userSlice'

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    try {
      const resp = await customFetch.post('/auth/local', data)
      store.dispatch(loginUser(resp.data))
      toast.success('You successfully login')
      return redirect('/')
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        'please double check your credentials'

      toast.error(errorMessage)
      return null
    }
  }

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loginAsGuestUser = async () => {
    try {
      const resp = await customFetch.post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret',
      })
      dispatch(loginUser(resp.data))
      toast.success('Welcome guest user')
      navigate('/')
    } catch (error) {
      console.log(error)
      toast.error('guest user login error.please try later.')
    }
  }
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold tracking-widest">
          Login
        </h4>
        <FormInput type="email" label="email" name="identifier" />
        <FormInput type="password" label="password" name="password" />
        <div className="mt-4">
          <SubmitBtn text="Login" />
        </div>
        <button
          type="button"
          className="btn btn-secondary btn-block"
          onClick={loginAsGuestUser}
        >
          Guest User
        </button>
        <p className="text-center">
          Not Member Yet?
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  )
}

export default Login
