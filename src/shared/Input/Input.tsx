import React from 'react'
import './Input.css'

const Input = () => {
  return <div className="AppInput">
    <label>
      <span>Produto</span>
      <input
        placeholder="Eg. Cookie"
      />
    </label>
  </div>
}

export default Input