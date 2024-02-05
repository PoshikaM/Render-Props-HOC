import React, { useState } from 'react'
import wrappedComponent from '../HOCcomponent/wrappedComponent';

function LikePost(props) {

  return (
    <div>
      <button onClick={props.handleClick}>Like Post {props.count}</button>
    </div>
  )
}

let NewHOCcomponent = wrappedComponent(LikePost);

export default NewHOCcomponent;