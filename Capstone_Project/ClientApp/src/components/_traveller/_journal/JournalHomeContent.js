import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { CreateJournalPost } from './CreateJournalPost';


export class JournalHomeContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            createJournalPost: false
        }
        this.addNewJournalEntry = this.addNewJournalEntry(this);
        this.backToJournalHome = this.backToJournalHome(this);
    }

    addNewJournalEntry(event) {
        event.preventDefault();
        this.setState({
            createJournalPost: true,
        })
    }

    backToJournalHome() {
        this.setState({
            createJournalPost: false,
        })
    }

    render() {
        const returnToJournal = this.backToJournalHome;
        if (this.state.createJournalPost) {
            return (
                <div>
                    <CreateJournalPost returnToJournalHome={returnToJournal} />
                </div>);
        }
        else {
            return (
                <div>
                    <Button onClick={(event) => this.addNewJournalEntry(event)}>Create a New Entry</Button>
                    <div> Journal Entries: </div>
                </div>
            );
        }
    }
}