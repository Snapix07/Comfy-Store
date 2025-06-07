import React from 'react'

const SectionTitle = ({ text }) => {
  return (
    <div className="border-b border-base-300 pb-5">
      <h2 className="capitalize font-medium tracking-wider text-3xl">{text}</h2>
    </div>
  )
}

export default SectionTitle
