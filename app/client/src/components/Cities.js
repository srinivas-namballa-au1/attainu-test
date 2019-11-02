import React, { Component } from 'react';

import Airports from './Airports.js';

class Cities extends Component {
  constructor(){
    super();

    this.state = {
      cities: [],
      selectedOption: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    let self = this;

    fetch('/cities')
      .then(res => res.json())
      .then(cities => {
        // console.log('cities ', cities);
        self.setState({ cities: cities });
      });
  }

  handleChange = event => {
    this.setState({ 
        selectedOption: event.target.value
    });
  };

  render() {
      return (
        <>
        <label className="offset-md-5" style={{marginTop: 30, color: '#2a89d1'}}>
            Select a City :

            <select value={this.state.selectedOption} onChange={this.handleChange} style={{color: '#2a89d1'}}>
                <option>select</option>
                {this.state.cities.map(city => (
                    <option key={city.city_name} value={city.city_name}>{city.city_name}</option>
                ))}
            </select>
        </label>
        
        <Airports city={this.state.selectedOption}/>
        </>
      );
  }
}

export default Cities;