
const Input = ({name, password}) => {
  return (
    <div className="my-4 p-5 bg-secondary">
      <div className="mb-3">
        <input type="text"
            className="form-control"
            onChange={(e)=> name[1](e.target.value)}
            placeholder="Introduce tu nombre" />
      </div>
      <div className="mb-3">
        <input type="password"
          className="form-control"
          onChange={(e)=> password[1](e.target.value)}
          placeholder="Introduce la contraseña"/>
      </div>
      {password[0] === "252525" 
        ? <button className="btn btn-primary w-100">INGRESAR</button>
        : null}
    </div>
  )
}

export default Input