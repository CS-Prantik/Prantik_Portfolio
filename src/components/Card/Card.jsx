import React from 'react'
import './Card.css'
const Card = (props) => {
    const {emoji,heading,detail}=props
  return (
    <div className="card">
    <img src={emoji} alt=""  />
    <span>{heading}</span>
    <span>{detail}</span>
    <button className="c-button">Learn More</button>
    </div>
  )
}

export default Card