import { formatPrice } from '../utils'
import { useState } from 'react'
const FormRange = ({ label, name, size }) => {
  const step = 1000
  const maxPrice = 100000
  const [selectedPrice, setSelectedPrice] = useState(maxPrice)

  return (
    <div className="form-control">
      <fieldset
        htmlFor={name}
        className="fieldset cursor-pointer flex justify-between"
      >
        <span className="label-text capitalize">{label}</span>
        <span>{formatPrice(selectedPrice)}</span>
      </fieldset>
      <input
        type="range"
        name={name}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
        className={`range range-primary ${size}`}
        step={step}
      />
      <div className="w-full flex justify-between text-xs px-2 mt-2">
        <span className="font-bold text-md">0</span>
        <span className="font-bold text-md">Max : {formatPrice(maxPrice)}</span>
      </div>
    </div>
  )
}
export default FormRange
