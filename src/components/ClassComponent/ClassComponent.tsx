import React from 'react'

class ClassCompoenent extends React.Component<{ name: string }> {
  state = {
    name: 'Mundo!!!!!!'
  }
  
  render() {
    return <div>
      <p>name: { this.state.name }</p>
      <button onClick={() => {
        this.setState({ name: 'Daniel' })
      }}>Click me</button>
    </div>
  }
}

export default ClassCompoenent
