import React from 'react'

class ClassCompoenent extends React.Component<{ name: string }> {
  constructor(props: any) {
    super(props)
    console.log('constructor reached')
  }

  state = {
    name: 'Mundo!!!!!!'
  }

  componentDidMount() {
    console.log('did mount reached')
  }

  componentDidUpdate() {
    console.log('did update reached')
  }
  
  render() {
    console.log('render reached')
    return <div>
      <p>name: { this.state.name }</p>
      <button onClick={() => {
        this.setState({ name: 'Daniel' })
      }}>Click me</button>
    </div>
  }
}

export default ClassCompoenent
