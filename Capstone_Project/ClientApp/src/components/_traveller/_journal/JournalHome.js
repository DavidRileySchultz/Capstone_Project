import React, { Component } from 'react';
import WriteEntry from './WriteEntry';

export class JournalHome extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    } 
    render() {
        return (
            <div>
                <h2> My Travel Journal </h2>
                <h4> The world is a book, and those who do not travel only read one page. </h4>
                <WriteEntry />
            </div>
        );
    }   
}

export default JournalHome;