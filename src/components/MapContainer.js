import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
    mapStyle = () => {
        return {
            float: 'right',
            height: '500px',
            width: '500px'
        }
    }

    render() {
        return (
        <Map style = {this.mapStyle()} google={this.props.google} zoom={14}>
    
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
    
            <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                {/* <h1>{this.state.selectedPlace.name}</h1> */}
                </div>
            </InfoWindow>
        </Map>
        );
    }
}
    
export default GoogleApiWrapper({
    apiKey: 'AIzaSyAtCTgWzMHGBHYfbnVMD6v1IDpxg9Zdmtg'
})(MapContainer)

