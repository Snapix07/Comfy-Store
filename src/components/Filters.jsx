import React from 'react'
import { Form, Link, useLoaderData } from 'react-router-dom'
import FormInput from './FormInput'
import FormSelect from './FormSelect'
import FormRange from './FormRange'
import FormCheckbox from './FormCheckbox'

const Filters = () => {
  const { meta, params } = useLoaderData()
  const { search, company, category, shipping, order, price } = params

  return (
    <Form className="bg-base-300 px-8 py-4 rounded-md grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* Search */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        defaultValue={search}
      />
      <FormSelect
        label="Search category"
        list={meta.categories}
        name="category"
        size="select-sm"
        defaultValue={category}
      />
      <FormSelect
        label="Search company"
        list={meta.companies}
        name="company"
        size="select-sm"
        defaultValue={company}
      />
      <FormSelect
        label="sort by"
        name="order"
        list={['a-z', 'z-a', 'high', 'low']}
        size="select-sm"
        defaultValue={order}
      />
      <FormRange
        name="price"
        label="select price"
        size="range-sm"
        defaultValue={price}
      />
      <FormCheckbox
        label="free shipping"
        name="shipping"
        size="checkbox-sm"
        defaultValue={shipping}
      />
      {/* BTN */}
      <button type="submit" className="btn btn-primary btn-sm uppercase">
        Search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm uppercase">
        Reset
      </Link>
    </Form>
  )
}

export default Filters
