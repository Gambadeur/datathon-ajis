import React, { Component } from 'react';
import './App.css';

import Home from './Containers/Home';
import CompanySize from './Containers/CompanySize';
import Region from './Containers/Region';
import ActivitySector from './Containers/ActivitySector';
import ContractType from './Containers/ContractType';
import Category from './Containers/Category';
import Carousel from './Containers/Carousel';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Carousel />
      </div>
    );
  }
}

export default App;
