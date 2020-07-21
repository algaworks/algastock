import React, { useState } from 'react'
import './TestComponent.css'

function TestComponent (props: { name: string }) {
  const [age, setAge] = useState(19)

  return <div className="TestComponent">
    Olá, { props.name }, { age }
    <button onClick={() => {
      setAge(age + 1)
    }}>
      +
    </button>
  </div>
}

export default TestComponent