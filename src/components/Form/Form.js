import React, { Component } from "react";
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      time: "",
      number: "",
      date: "",
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value });
  };

  submitReservation = (event) => {
    event.preventDefault(); 
    const newReservation = {
      id: Date.now(),
      ...this.state, 
    };
    if(!newReservation.name || !newReservation.date  || !newReservation.time  || !newReservation.number) {
      return 
    } else {
      this.props.addRes(newReservation); 
      this.clearInputs()
    }
 
    
  };

  clearInputs = () => {
    this.setState({ name: "", time: "", number: "", date: "" });
  };


  render() {
    return (
      <form className="form">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={(event) => this.handleChange(event)}
        />
        <input
          type="text"
          placeholder="Date (mm/dd)"
          name="date"
          value={this.state.date}
          onChange={(event) => this.handleChange(event)}
        />
        <input
          type="text"
          placeholder="Time"
          name="time"
          value={this.state.time}
          onChange={(event) => this.handleChange(event)}
        />
        <input
          type="text"
          placeholder="Number of guests"
          name="number"
          value={this.state.number}
          onChange={(event) => this.handleChange(event)}
        />
        <button className="res-btn" onClick={(event) => this.submitReservation(event)}>
          Make Reservation
        </button>
      </form>
    );
  }
}

export default Form;