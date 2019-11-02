import React, { Component } from 'react';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Cities from './components/Cities.js';

class App extends Component {
  constructor(){
    super();

    this.state = {
      cities: []
    };

  }

  componentDidMount() {
    let self = this;

    fetch('/cities')
      .then(res => res.json())
      .then(cities => {
        // console.log('cities ', cities);
        self.setState({ cities: cities })
      });
  }

  render() {
      return (
        <>
          <Header />

          <Cities />

          <Footer />
        </>
      );
  }
}

export default App;