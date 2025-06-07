const FormCheckbox = ({ label, name, defaultValue, size }) => {
  return (
    <div className="form-control flex items-center flex-col">
      <label htmlFor={name} className="fieldset cursor-pointer">
        <span className="fieldset-legend capitalize">{label}</span>
      </label>
      <input
        type="checkbox"
        name={name}
        defaultChecked={defaultValue}
        className={`checkbox checkbox-primary ${size}`}
      />
    </div>
  )
}
export default FormCheckbox
