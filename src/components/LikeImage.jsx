import React, { useState } from 'react'
import WrappedComponent from '../HOCcomponent/wrappedComponent'

function LikeImage(props) {  

  return (
    <div>
      <button onClick={props.handleClick}>Like Image {props.count}</button>
    </div>
  )
}

let NewHOCcomponent = WrappedComponent(LikeImage);

export default NewHOCcomponent;