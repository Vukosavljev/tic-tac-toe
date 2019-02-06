import React from 'react'
import '../Style/Game.css'

export default function Square(props) {

  return (
    <div className="square" onClick={props.handelClick} style={props.winnStyle ? {backgroundColor: 'aqua'} : null  }>
      {props.children}
    </div>
  )
}
