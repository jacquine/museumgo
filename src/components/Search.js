import React, { Component } from 'react'
import Results from './Results'
import Checkbox from './Checkbox'

const OPTIONS = ["ramp", "elevators", "wheelchair rental", "guide dogs", "braille", "accessibility tours"];

class Search extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            location: '',
            value2: '',
            results: '',
            checkboxes: OPTIONS.reduce(
                (options, option) => ({
                    ...options,
                    [option]: false
                }),
                {}
            ),
            resultList: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getResult = this.getResult.bind(this);
    }

    handleChange(event) {
        this.setState({
            location: event.target.value
        });
    }

    handleChange2(event) {
        this.setState({
            amenities: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    getResult(event) {
        // const axios = require('axios');
        // axios.get("http://localhost:8080/museums")
        // .then(function(response) {
        //     console.log(response);
        // })
        fetch(
            'http://localhost:8080/museums')
            .then(response => response.json())
            .then(
                data => {
                    console.log(data);
                    this.setState({resultList: data, results:true
                    });
                 
            });
        
    }
    handleCheckboxChange = changeEvent => {
        const { name } = changeEvent.target;
    
        this.setState(prevState => ({
          checkboxes: {
            ...prevState.checkboxes,
            [name]: !prevState.checkboxes[name]
          }
        }));
    };
    
    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
    
        Object.keys(this.state.checkboxes)
          .filter(checkbox => this.state.checkboxes[checkbox])
          .forEach(checkbox => {
            console.log(checkbox, "is selected.");
          });
    };
    
    createCheckbox = option => (
        <Checkbox
          label={option}
          isSelected={this.state.checkboxes[option]}
          onCheckboxChange={this.handleCheckboxChange}
          key={option}
        />
    );
    
    createCheckboxes = () => OPTIONS.map(this.createCheckbox);

    render() {
        if (!this.state.results) {
            return (
            <form onSubmit={this.handleSubmit}>
                <label>
                <input type="text" value={this.state.location} onChange={this.handleChange} placeholder="Your Location" />
                </label>
                <br/>
                <br/>
                <label>
                {this.createCheckboxes()}
                {/* <select value={this.state.amenities} onChange={this.handleChange}>
                    <option value="ramp">Ramps</option>
                    <option value="elevators">Elevators</option>
                    <option value="wheelchair rental">Wheelchair Rental</option>
                    <option value="guide dogs">Guide dogs</option>
                    <option value="braille">Braille</option>
                    <option value="accessibility tours">Accessibility guided tours</option>
                </select> */}
                </label><br/>
                <button onClick={this.getResult}>search</button>
            </form>
            )
        }
        else {
            return (
                 <Results results={this.state.resultList}/>
            )
        }  
    }
}

export default Search;