import React from 'react';
import { AddNewPlaceForm } from './_journal/AddNewPlaceForm';

function JournalHome() {
    return (
        <div>
            <h2> My Travel Journal </h2>
            <h4> The world is a book, and those who do not travel only read one page. </h4>
            <AddNewPlaceForm />
        </div>
    );
}

export default JournalHome;