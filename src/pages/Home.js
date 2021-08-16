import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import '../css/Home.css';
import ContactUs from '../components/ContactUs';
import SlideDeck  from '../components/SlideDeck';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className='home-page'>
                <div className='home-header-container'>
                    <SlideDeck></SlideDeck>
                </div>

                <div className='home-info'>
                    <div className="about-container">
                        <Jumbotron className="container">
                            <img src="/CaseyRock.jpg" className="CaseyRock-pic"></img>
                            <div className="caseyrock-info">
                                <div className="title">
                                    Casey Rock
                                </div>
                                <div className="text-page">
                                    A senior at the University of Delaware studying Computer Science with a Concentration in Cyber Security. While in college, I intern at Booz Allen Hamilton on a Defense Contract for the Army where I look at knowledge graphs and understand how to characterize data with respect to Cyber Security. Over the summer, I am participating in a pre-accelerate for a startup, where I am looking to build a business model that supports finding the industry problems with Cyber Security Education. 
                                </div>
                            </div>
                        </Jumbotron>

                    </div>

                    {/* <div className="data-container">
                        <Jumbotron className="container container-left">
                            <h2 className="title">
                                A Platform That Scales With You
                            </h2>
                            <p className="text-page">
                                As your company grows our platform expands with you, giving you additional assets as you need them.
                            </p>
                        </Jumbotron>
                        <Jumbotron className="container container-right">
                            <h2 className="title">
                                Emulate Your Networks
                            </h2>
                            <p className="text-page">
                                Replicate your company's networks allowing your security team to have hands-on training that directly relates to your company's needs without compromising your company's security.
                            </p>
                        </Jumbotron>
                    </div> */}
                </div>
                <ContactUs />
            </div>
        );
    }
}