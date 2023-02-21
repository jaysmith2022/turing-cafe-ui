

import React from "react";
import './Card.css'

const Card = ({date, name, number, time, id, cancelRes}) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests:{number}</p>
      <button className="cancel-btn" onClick={() => cancelRes(id)}>Cancel</button>
    </div>
  )
}

export default Card

