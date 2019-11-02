import React, { Component } from 'react';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Cities from './components/Cities.js';

class App extends Component {
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