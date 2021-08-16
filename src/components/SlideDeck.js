import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "../css/SlideDeck.css";

const images = [
    'Slides/slide1.png',
    'Slides/slide2.png',
    'Slides/slide3.png',
    'Slides/slide4.png',
    'Slides/slide5.png',
    'Slides/slide6.png',
    'Slides/slide7.png',
    'Slides/slide8.png',
    'Slides/slide9.png',
    'Slides/slide10.png',
    'Slides/slide11.png',
    'Slides/slide12.png',
  ];


export default class SlideDeck extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="slide-container">
            <Zoom scale={0.4}>
              {
                images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
              }
            </Zoom>
          </div>
        );
    }
}