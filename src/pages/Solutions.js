import React from "react";
import { Jumbotron } from 'react-bootstrap';
import "../css/Solutions.css";
import ContactUs from '../components/ContactUs';

export default class Solutions extends React.Component {
    constructor(props) {
        super(props);
        this.handleImgLoad = this.handleImgLoad.bind(this);
    }

    handleImgLoad() {
        let image2 = document.getElementById('katas-create-page-image');
        let container2 = document.getElementById('katas-container');
        container2.style.height = (document.documentElement.clientHeight * .3) + image2.offsetHeight + 'px';

    }
    componentDidMount() {
        // this.handleImgLoad();
        // window.addEventListener("resize", this.handleImgLoad.bind(this));
    }

    render() {
        return (
            <div className="solutions-page">
                <div className="solutions-title-container">
                    <h1 className="solutions-page-title">
                        Our Solutions
                    </h1>
                </div>

                <div id="katas-container">

                    <Jumbotron onClick={() => window.location.href = 'https://cslabs.app/'} className="solutions-container container-left">
                        
                        <div className="left">
                            <div>
                                <h2 className="solutions-container-title">
                                    Cyber Academy
                                </h2>
                            </div>

                            <p className="text-body" >
                                Expand your skill set with expertly crafted lessons to take your cyber security skills from zero to hero and prepare you for a career in one of the most lucrative industries in a rapidly expanding market. 
                            </p>
                            
                        </div>

                        <img src="/academyScreenShot.png" className="academyScreenShot"></img>

                    </Jumbotron>
                </div>

                <div id="arena-container">
                    <Jumbotron className="solutions-container container-right">
                        <img src="/WarRoomScreenshot.png" className="arenaScreenShot"></img>

                        <div className="right">
                            <div>
                                <h2 className="solutions-container-title">
                                    War Room
                                </h2>
                            </div>

                            <p className="text-body">
                                Put your Red and Blue Team skills to the test in the War Room. Compete against fellow hackers and security professionals in realistic attack and defense scenarios.
                            </p>

                        </div>
                    </Jumbotron>
                </div>
                    <ContactUs/>
            </div>
        );
    }
}