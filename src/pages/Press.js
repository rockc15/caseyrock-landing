import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import '../css/Press.css';
import ContactUs from '../components/ContactUs';

export default class Press extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className='press-page'>
                <div className="press-title-container">
                    <h1 className="press-page-title">
                        Press
                    </h1>
                </div>                        
                
                <div className='press-info'>

                    <div className="about-container">
                        <Jumbotron className="container-center">
                            <div className="title-container" style={{ padding: '1%' }}>
                                <h2 className="title">
                                    Virtual Camp Teaches Kids Cyber Skills
                                </h2>
                            </div>
                            <p className="subtitle">
                                UD students help middle schoolers learn computer engineering
                            </p>
                            <p className="source-and-date">
                                UDaily - July 10, 2020
                            </p>
                            <p className="text-page">
                                About 60 local middle schoolers are putting their socially distant time to good use, thanks to a virtual coding and cybersecurity summer camp hosted by computer engineering experts at the University of Delaware...
                            </p>
                            <p className="article-link">
                                <a href="https://www.udel.edu/udaily/2020/july/cyber-camp-children-computer-engineering-outreach/" target="_blank" rel="noopener noreferrer">continue reading</a>
                            </p>
                        </Jumbotron>
                    </div>
                    <ContactUs/>
                </div>
            </div>
        );
    }
}