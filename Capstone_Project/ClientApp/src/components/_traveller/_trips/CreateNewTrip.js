import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl, ControlLabel, Col, ColProps, Row, ButtonToolbar } from 'react-bootstrap';
import { Route, Link, Redirect, withRouter, BrowserRouter } from 'react-router-dom';
import { SelectGroups } from './SelectGroups';

export class CreateEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasGroups: false,
        }
    }

    async goToRoutes(name, description, date, time, groups, numberOfRoutes) {
        let travellerId = localStorage.getItem('travellerId');
        let tirpId;
        let data = {
            travellerId: travellerId,
            name: name,
            description: description,
            date: date,
            groups: groups
        }
        await fetch('api/Events/CreateNewEvent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(response => response.json()).then(data => { return (eventId = data.id); }).catch(error => console.log(error));

        this.setState({
            hasGroups: true,
            hasRoutes: false,
            name: name,
            description: description,
            date: date,
            groups: groups,
            tripId: tripId,
        })
    }

    finishCreating() {
        var tripId = this.state.tripId;
        var data = {
            tripId: tripId
        }
        fetch('/api/Events/AddDetails', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(response => response.json()).then(data => console.log(data)).catch(error => console.log(error));
        this.props.backToEventHome();
    }

    render() {
        let nextButton = null;
        let backButton = null;

        var action;
        const goToRoutes = (name, description, date, time, groups, numberOfRoutes) => this.goToRoutes(name, description, date, time, groups, numberOfRoutes);
        if (!this.state.hasGroups) {
            action = <SelectGroups style={this.props.style} goToRoutes={goToRoutes} backToEventHome={this.props.backToEventHome} />
        }
        else if (!this.state.hasRoutes) {
            action = <SelectRoutes style={this.props.style} name={this.state.name} id={this.state.tripId} onCompleting={onCompleting} />
        }

        return (
            <div style={this.props.style}>
                <Row>
                    <Col md={2} mdOffset={1}>
                        <h2 className="page-subtitle">Create Event</h2>
                    </Col>
                </Row>
                <Row>
                    {action}
                    {nextButton}
                </Row>
            </div>
        );
    }
}