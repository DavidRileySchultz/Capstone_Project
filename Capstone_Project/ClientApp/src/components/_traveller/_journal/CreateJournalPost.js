import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl, ControlLabel, Col, ListGroupItem, ListGroup, ColProps, Row, Alert } from 'react-bootstrap';
import { Route, Link, Redirect, withRouter, BrowserRouter } from 'react-router-dom';
import { NavMenu } from '../NavMenu';
import _ from 'lodash';

export class CreateJournalPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            pubDate: '',
            errorMessage: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitJournalEntry = this.submitJournalEntry.bind(this);
    }

    async submitJournalEntry(event) {
        event.preventDefault();
        if (!this.canSubmit()) {
            this.setState({ errorMessage: "Can't Submit Without Title!" });
        }
        else {
            var travellerId = localStorage.getItem('travellerId');
            const data = {
                name: this.state.name,
                travellerId: travellerId
            };
            await fetch('api/Journals/Create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            }).cath(error => console.log(error));
            this.propr.returnToJournalHome();
        }
    }

    canSubmit() {
        return this.state.name !== '';
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    render() {
        const journalEntryAdded = this.state.content.map((content) => <ListGroupItem key={content.value}>{content.display}</ListGroupItem>)
        const style = {
            backgroundColor: "orange",
            height: "85vh"
        };
        const journalEntryBox = {
            backgroundColor: "#c2e6ff",
            height: "60vh",
            paddingLeft: "30px",
            paddingRight: "30px",
            color: "#555",
            fontFamily: "'Segoe UI', sans-serif",
            overflow: "auto",
            marginBottom: "10px",
            boxShadow: "4px 4px 5px 0px rgba(0,0,0,0.41)",
            borderRadius: "5px"
        }
        return (
            <div style={style}>
                <Row className="empty-space2percent" />
                <Row>
                    <Col md={2} mdOffset={1}>
                        <h1 className="page-subtitle"> Create a Journal Entry to Document Your Experiences! </h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={3} mdOffset={1}>
                        <div hidden={this.state.errorMessage === ''}>
                            <Alert>{this.state.errorMessage}</Alert>
                        </div>
                        <Form>
                            <FormGroup>
                                <FormControl
                                    placeholder="Entry Title"
                                    type="text"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col md={3}>
                        <Form>
                            <FormGroup>
                                <FormControl
                                    placeholder="Start Your Journal Entry"
                                    type="text"
                                    name="content"
                                    value={this.state.content}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col md={4}>
                        <div style={journalEntryBox}>
                            <h3>Journal Entries!:</h3>
                            <ListGroup>
                                {journalEntryAdded}
                            </ListGroup>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={1} mdOffset={1}>
                        <a className="smaller-action-buttons" onClick={this.proper.returnToJournalHome}>Back</a>
                    </Col>
                    <Col md={2}>
                        <a className="btn action-button" onClick={(event) => this.submitJournalEntry(event)}>Finish</a>
                    </Col>
                </Row>
            </div>
        );
    }
}