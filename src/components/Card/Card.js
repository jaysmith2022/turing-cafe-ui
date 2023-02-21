

import React from "react";
import './Card.css'

const Card = ({date, name, number, time}) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests:{number}</p>
      <button className="cancel-btn">Cancel</button>
    </div>
  )
}

export default Card

