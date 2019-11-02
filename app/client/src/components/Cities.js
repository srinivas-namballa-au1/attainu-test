import React, { Component } from 'react';

class Cities extends Component {
  constructor(){
    super();

    this.state = {
      cities: [],
      selectedOption: ''
    };

  }

  componentDidMount() {
    let self = this;

    fetch('/cities')
      .then(res => res.json())
      .then(cities => {
        // console.log('cities ', cities);
        self.setState({ cities: cities });
      });

      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ 
        selectedOption: event.target.value
    });
  };

  handleSubmit = event => {
    console.log(`Option selected:`, this.state.selectedOption);
    event.preventDefault();
  }

  render() {
      return (
        <>
        <form  onSubmit={this.handleSubmit}>
            <label className="offset-md-5" style={{marginTop: 30}}>
                Select a City :

                <select>
                    {this.state.cities.map(city => (
                        <option key={city.city_name} value={city.city_name}>{city.city_name}</option>
                    ))}
                </select>
            </label>

            <input type="submit" value="Submit" className="btn-info offset-md-1" />
        </form>
        </>
      );
  }
}

export default Cities;