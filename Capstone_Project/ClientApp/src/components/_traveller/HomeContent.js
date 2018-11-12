import React, { Component } from 'react';
import image from './TravellerImages/Travel.jpg'
import GoogleMapsContainer from './_mapComponents/GoogleMapsContainer';

export class HomeContent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const skyScanner = document.createElement("script");
        const kayak = document.createElement("script");
        skyScanner.src = "https://widgets.skyscanner.net/widget-server/js/loader.js";
        skyScanner.async = true;
        kayak.src = "https://www.kayak.com/affiliate/widget-v2.js";
        
        document.body.appendChild(skyScanner, kayak);
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
                <div data-skyscanner-widget="SearchWidget" data-locale="en-US" data-enable-placeholders="true" data-params="colour:lunar;fontColour:malt;buttonColour:loch;buttonFontColour:malt;"></div>
                <div id="kayakSearchWidgetContainer"></div>
                <center><h2>Keep Track of Where you've Been!</h2></center>
                <GoogleMapsContainer />
            </div>
        );
    }
}

