import React, { Component } from 'react';
import image from './TravellerImages/Travel.jpg'
import GoogleMapsContainer from './_mapComponents/GoogleMapsContainer';

export class HomeContent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const script = document.createElement("script");

        script.src = "https://widgets.skyscanner.net/widget-server/js/loader.js";
        script.async = true;

        document.body.appendChild(script);
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
                <div data-skyscanner-widget="SearchWidget"></div>
                <GoogleMapsContainer />
            </div>
        );
    }
}

