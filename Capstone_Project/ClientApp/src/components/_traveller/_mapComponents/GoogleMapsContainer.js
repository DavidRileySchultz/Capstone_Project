﻿import React, { Component } from 'react';
import google, { GoogleApiWrapper, InfoWindow, Map, Marker, Paper, Typography } from 'google-maps-react';

export class GoogleMapsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        }
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onMapClick = this.onMapClick.bind(this);
    }

    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }
    onMapClick = (map) => {
        //if (this.state.showingInfoWindow) {
        //    this.setState({
        //        showingInfoWindow: false,
        //        activeMarker: null
        //    });

        function placeMarker(location) {
            var marker = new google.maps.Marker({
                position: location,
                map: map
            });
        }
        google.maps.event.addListener(map, 'click', function (event) {
            placeMarker(event.latLng);
        });

          
        
    }

    render() {
        const style = {
            width: '97.5vw',
            height: '75vh',
            'marginLeft': 'auto',
            'marginRight': 'auto'
        }
        
        return (
            <Map
                item
                xs={12}
                style={style}
                google={this.props.google}
                onClick={this.onMapClick}
                zoom={2}
                initialCenter={{ lat: 43.034055, lng: -87.911680 }}
            >   
                <Marker
                    onClick={this.onMarkerClick}
                    title={'Pritzlaff'}
                    position={{ lat: 43.034055, lng: -87.911680 }}
                    name={'Pritzlaff'}
                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                >
                    <Paper>
                        <Typography
                            variant='headline'
                            component='h4'
                        >
                            Pritzlaff
                        </Typography>
                        <Typography
                            component='p'
                        >
                            313 N Plankinton Ave Milwaukee, WI 53203 <br />
                        </Typography>
                    </Paper>
                </InfoWindow>
            </Map>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyB_aYx1jKUwUB2OSOsUaTtsSfXfGbfxBHA')
})(GoogleMapsContainer)


