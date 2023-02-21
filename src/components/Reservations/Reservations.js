import React from "react";
import "./Reservations.css";
import Card from "../Card/Card";

const Reservations = ({ reservations }) => {
  const resCards = reservations.map((res) => {
    return <Card 
    key={res.id}
    id={res.id}
    date={res.date}
    name={res.name}
    number={res.number}
    time={res.time}
     />;
  });
  return (
  <div className="reservation-container">{resCards}</div> )

};

export default Reservations;