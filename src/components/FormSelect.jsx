import React from 'react'

const FormSelect = ({ name, label, list, defaultValue, size }) => {
  return (
    <div className="form-control">
      {/* Label */}
      <label htmlFor={name} className="fieldset">
        <span className="fieldset-legend capitalize">{label}</span>
      </label>
      {/* Select */}
      <select
        name={name}
        id={name}
        className={`select select-bordered ${size}`}
        defaultValue={defaultValue}
      >
        {list.map((item) => {
          return (
            <option value={item} key={item} className="font-bold">
              {item}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default FormSelect
