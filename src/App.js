import React, { Component } from 'react';
import './App.css';

import Home from './Containers/Home';
import CompanySize from './Containers/CompanySize';
import Region from './Containers/Region';
import ActivitySector from './Containers/ActivitySector';
import ContractType from './Containers/ContractType';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends Component {

  render() {

    return (

      <MuiThemeProvider>
        <div className="App carousel">
          <Home />
          <CompanySize />
          <ContractType />
          <Region />
          <ActivitySector />
          {/*<Category />*/}
        </div>
      </MuiThemeProvider >

    );

  }

}



export default App;
