import React, { Component } from 'react';
import image from './TravellerImages/Travel.jpg'
import GoogleMapsContainer from './_mapComponents/GoogleMapsContainer';

export class HomeContent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const skyScanner = document.createElement("script");
        const expedia = document.createElement("script")
        
        skyScanner.src = "https://widgets.skyscanner.net/widget-server/js/loader.js";
        skyScanner.async = true;
        expedia.src = "https://apps.expediapartnercentral.com/lodging/content/award/static/js/rating/11962641/Hotels-Dark-Square-en_GB.js?widgetName=Property Rating Widget&hotelName=Langdale View Guest House&noFollow=false"
        
        document.body.appendChild(skyScanner, expedia);
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
                
                <div id="widgetContainerBox" data-isaddnofollow="false"></div>
                <center><h2>Keep Track of Where you've Been!</h2></center>
                <GoogleMapsContainer />
            </div>
        );
    }
}

//<div id="widgetContainerBox" data-isaddnofollow="false"></div>
//    <script src="https://apps.expediapartnercentral.com/lodging/content/award/static/js/rating/11962641/Hotels-Dark-Square-en_GB.js?widgetName=Property Rating Widget&hotelName=Langdale View Guest House&noFollow=false"></script>

