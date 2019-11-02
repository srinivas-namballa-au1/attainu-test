import React, { Component } from 'react';

class Airports extends Component {
  constructor(){
    super();

    this.state = {
      airports: []
    };
  }

  componentDidMount() {
    let self = this;

    fetch('/airports')
      .then(res => res.json())
      .then(airports => {
        console.log('airports ', airports);
        self.setState({ airports: airports });
      });
  }

  render() {
      console.log(this.props.city);
      return (
        <div className="offset-md-5">
          {this.state.airports.map(city => {
            if(city.city_name === this.props.city) {
              return (<div>
                <br />
                <p style={{color: '#2a89d1'}}><strong>Airport Name</strong>: &nbsp;{city.airport_name}</p>
                <br />
                <p style={{color: '#2a89d1'}}><strong>IATA Code</strong>: &nbsp;{city.IATA_code}</p>
              </div>
              )
            }
          })}
        </div>
      );
  }
}

export default Airports;