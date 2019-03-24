import React, { Component } from 'react'
import Museum from './Museum'

export default class MuseumsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
        
    }
    render() {
        return (
        <div>
            <Museum />
            
        </div>
        )
    }
}
