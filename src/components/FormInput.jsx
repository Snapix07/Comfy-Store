const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <div className="form-control ">
      <label className="fieldset">
        <span className="fieldset-legend capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
      />
    </div>
  )
}
export default FormInput
