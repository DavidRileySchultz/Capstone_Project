import React, { Component } from 'react';
import image from './TravellerImages/Travel.jpg'
import GoogleMapsContainer from './_mapComponents/GoogleMapsContainer';

export class HomeContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const background = {
            height: "89vh",
            backgroundImage: `url(${image}`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }

        return (
            <div>
                <div style={background}>
                </div>
                <GoogleMapsContainer />
            </div>
        );
    }
}