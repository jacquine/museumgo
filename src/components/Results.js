import React, { Component } from 'react'
import MapContainer from './MapContainer'
import MuseumsList from './MuseumsList'

export default class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mylist: this.props.results
        }
    }

  render() {
      console.log(this.state.mylist);

    return (
      <div>
          {this.state.mylist.map(museum => 
          <div key={museum.name}> 
            {museum.name}, 
            <br/>
            {museum.address},
            <br/>
            {museum.amenities}
            <img src='ramp.png'></img>
            
            <br/>
            <br/>
            <br/>

          </div>)}

          <MapContainer/>
      </div>
    );
  }
}
