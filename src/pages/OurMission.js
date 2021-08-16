import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import '../css/Mission.css';
import ContactUs from '../components/ContactUs';

export default class Mission extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className='mission-page'>
                <div className="mission-title-container">
                    <h1 className="mission-page-title">
                        Mission
                    </h1>
                </div>  
                
                <div className='mission-info'>
                    <div className="about-container">
                        <Jumbotron className="container container-left">
                            <div style={{ padding: '1%' }}>
                                <h2 className="title">
                                    Core Mission
                                </h2>
                            </div>
                            <p className="text-page">
                                It is our mission to bring cybersecurity education and training to everyone where they are. We endeavor to provide those who have the desire to learn and an internet connected device with the knowledge and skills to make the world a safer place to connect and share information.
                            </p>
                        </Jumbotron>

                        <Jumbotron className="container container-right">
                            <div style={{ padding: '1%' }}>
                                <h2 className="title">
                                    The Job Market
                                </h2>
                            </div>
                            <p className="subtitle">We're Understaffed</p>
                            <p className="text-page">                                
                                There is an absolutely staggering shortfall in the number of qualified individuals to fill positions in cybersecurity jobs. There is an estimated workforce gap of over a half a million jobs in the US<sup>1</sup> and 4.07 million<sup>2</sup> jobs world wide.
                            </p>
                            <p className="text-page">
                                <a href="https://www.cyberseek.org/heatmap.html">CyberSeek<sup>1</sup></a>{" | "}
                                <a href="https://www.isc2.org/-/media/ISC2/Research/2019-Cybersecurity-Workforce-Study/ISC2-Cybersecurity-Workforce-Study-2019.ashx?la=en&hash=1827084508A24DD75C60655E243EAC59ECDD4482">2019 ISC2 Workforce Study<sup>2</sup></a>{" | "}
                                <a href="https://www.infosecurity-magazine.com/news/cybersecurity-skills-shortage-tops/">Info Security Magazine<sup>2</sup></a>{" | "}
                                
                            </p>
                        </Jumbotron>

                        <Jumbotron className="container container-left">
                            <div style={{ padding: '1%' }}>
                                <h2 className="title">
                                    The World in Which we Live
                                </h2>
                            </div>
                            <p className="subtitle">The Sci-Fi "World of Tomorrow" is Now</p>
                            <p className="text-page">                                
                                The world around us has changed faster than many have realized. Children raised right now are growing up in a world unlike the one their parents were raised into. Every single aspect of our lives is touched by technology. Manufacturing, infrastructure, food service, entertainment, education, media and news are all fundamentally reliant on data science and engineering. In this world, understanding cybersecurity and how its role in your life is as fundamentally neccesary as looking both ways before you cross the street.
                            </p>
                        </Jumbotron>

                    </div>
                    <ContactUs />
                </div>
            </div>
        );
    }
}