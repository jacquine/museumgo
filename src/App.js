import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import MapContainer from './components/MapContainer';
import MuseumsList from './components/MuseumsList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-md-9 right">
          <h1> MOMAccess </h1>
          <Search/>
          <br/>
          <br/>

          <MapContainer />
          <br/>
          <MuseumsList/>
        </div>  
      </div>
    )
  }
}

export default App;
