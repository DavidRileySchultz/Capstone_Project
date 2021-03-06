﻿import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';


export class SearchMembers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term2: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    onInputChange(term) {
        this.setState({ term2: term });
        this.props.onSearchEnter(this.state.term2);
    }

    render() {
        return (
            <FormGroup>
                <FormControl
                    placeholder="Search for your friends"
                    type="text"
                    name="term2"
                    value={this.state.term2}
                    onChange={(event) => this.onInputChange(event.target.value)}
                />
            </FormGroup>
        );
    }
}