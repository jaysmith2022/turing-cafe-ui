import React, { Component } from 'react';
import './App.css';
import { fetchAllReservations } from '../api';
import Reservations from '../components/Reservations/Reservations';
import Form from '../components/Form/Form';


class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: null,
      errors: ""
    };
  }
  componentDidMount () {
    this.setState({isLoading: true})
    fetchAllReservations()
    .then((data) => {
      this.setState({reservations: data})
    })
    .catch((error) => {
      this.setState({errors: error})
    })
  }

  addReservation = (newInput) => {
    this.setState({ reservations: [...this.state.reservations, newInput] });
  };


  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <div className="resy-form">
          <Form addRes={this.addReservation}/>
        </div>
        <div className="resy-container">
          {!this.state.reservations ? <h2>Loading...</h2> :
          <Reservations reservations={this.state.reservations} />
          }
        </div>
      </div>
    );
  }
}

export default App;
