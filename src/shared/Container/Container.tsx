import React from 'react'
import './Container.css'

const Container: React.FC<{ children: JSX.Element | JSX.Element[]}> = (props) => {
  return <div className="AppContainer">
    { props.children }
  </div>
}

export default Container
