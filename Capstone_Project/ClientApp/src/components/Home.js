//import React, { Component } from 'react';
//import Background from './WebsiteImages/Background.jpg'

//export class Home extends Component {
//    displayName = Home.name

//    render() {
//        const background = {
//            height: "89vh",
//            backgroundImage: `url(${Background}`,
//            backgroundPosition: "center",
//            backgroundSize: "cover",
//            backgroundRepeat: "no-repeat"
//        }

//        return (
//            <div style={background}></div>
//        );
//    }
//}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Background from "./WebsiteImages/Background.jpg"



const Wrapper = styled.div`
    min-height: 100vh;
    width: 100%;
    background: url('Components/WebsiteImages/Background.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4.3em;
  font-family: 'Sue Ellen Francisco', cursive;
  color: rgb(55, 85, 109);
  padding-bottom: 0.2em;
`;

const LandingButton = styled.button`
        margin: 9px .25em 1em 0em;
        padding: 0.5em 1.15em;
        font-weight: 400;
        line-height: 1em;
        border-radius: 0.885714rem;
        font-size: 1.58571429rem;
        background-color: rgb(47,67,88);
        color: #fdfbf9;
        font-family: 'Barlow Semi Condensed', sans-serif;

`;

const Div = styled.div`
  position: absolute;
  bottom: 4%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
`;


export class Home extends Component {
    render() {
        return (
            <Wrapper>
                <Div>
                    <Title>Welcome to BonVoyage</Title>
                    <center>
                    <div>
                            <div onClick={this.props.onClickingRegister}>
                                <LandingButton>SIGN UP</LandingButton>
                        
                                <Link to="/login"><LandingButton>Log In</LandingButton></Link>
                        </div>
                    </div>
                    </center>
                </Div>
            </Wrapper>
        )
    }
}



