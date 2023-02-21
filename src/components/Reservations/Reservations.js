import React from "react";
import "./Reservations.css";
import Card from "../Card/Card";

const Reservations = ({ reservations, cancelRes }) => {
  const resCards = reservations.map((res) => {
    return <Card 

    date={res.date}
    name={res.name}
    number={res.number}
    time={res.time}
    key={res.id}
    id={res.id}
    cancelRes={cancelRes}
     />;
  });
  return (
  <div className="reservation-container">{resCards}</div> )

};

export default Reservations;