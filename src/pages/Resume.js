import React from "react";
import { Jumbotron } from 'react-bootstrap';
import "../css/Solutions.css";
import ContactUs from '../components/ContactUs';

export default class Resume extends React.Component {
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
                        Resume
                    </h1>
                </div>

                <div id="katas-container">

                    <Jumbotron className="solutions-container">
                        
                        <img src="/resume.png" className="resume-pic"></img>

                    </Jumbotron>
                </div>
                <ContactUs></ContactUs>
            </div>
            
        );
    }
}