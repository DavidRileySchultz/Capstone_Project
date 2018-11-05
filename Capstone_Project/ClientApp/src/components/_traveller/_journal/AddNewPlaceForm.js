import React from 'react';

function AddNewPlaceForm() {
    return (
        <div>
            <h3> Add New Places to Visit! </h3>
            <form>
                <input
                    type='text'
                    id='country-name'
                    placeholder='Name of Country' /> <br />
                <textarea
                    id='description'
                    placeholder='Description of Country' /> <br />
                <input
                    type='text'
                    id='points-of-interest'
                    placeholder='Point of Interest #1' /> <br />
                <input
                    type='text'
                    id='image-path'
                    placeholder='Image for PoI #1' /> <br />
                <br />

                <input
                    type='text'
                    id='points-of-interest'
                    placeholder='Point of Interest #2' /> <br />
                <input
                    type='text'
                    id='image-path'
                    placeholder='Image for PoI #2' /> <br />
                <br />

                <input
                    type='text'
                    id='points-of-interest'
                    placeholer='Point of Interest #3' /> <br />
                <input
                    type='text'
                    id='image-path'
                    placeholder='Image for PoI #3' /> <br />
                <br />

                <input
                    type='text'
                    id='points-of-interest'
                    placeholder='Point of Interest #4' /> <br />
                <input
                    type='text'
                    id='image-path'
                    placeholder='Image for PoI #4' /> <br />
                <br />

                <input
                    type='text'
                    id='points-of-interest'
                    placeholder='Point of Interest #5' /> <br />
                <input
                    type='text'
                    id='image-path'
                    placeholder='Image for PoI #5' /> <br />
                <br />
                <button type='submit'> Add! </button> <br />
            </form>
        </div>
    );
}

export default AddNewPlaceForm;