import React from "react";
import { Jumbotron } from 'react-bootstrap';
import { TextField, Button, InputAdornment } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import "../css/ContactUs.css";

export default class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }
    // setName = (ev) => {
    //     this.setState({name:ev.target.value});
    // }

    // setEmail = (ev) => {
    //     this.setState({email:ev.target.value});
    // }

    // sendEmail = async () => {
    //     let span = document.getElementById('contact-message-span');
    //     span.innerHTML = '';
    //     if(!this.state.name){
    //         span.innerHTML = "Please enter your name";
    //         return
    //     }
    //     if(!this.state.email || !this.state.email.includes("@") || !this.state.email.includes('.')) {
    //         span.innerHTML = "Please enter a valid email";
    //         return
    //     }
    //     let data = JSON.stringify({name:this.state.name,email:this.state.email});
    //     const response = await fetch("https://us-central1-cyberdojo-e9bd6.cloudfunctions.net/app/sendEmail", {
    //         method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Access-Control-Allow-Origin': '*'
    //             // 'Content-Type': 'application/x-www-form-urlencoded',
    //         },
    //         body: data // body data type must match "Content-Type" header
    //     });
    //     let res = await response.json();
    //     console.log("res is ",res)
    // }

    render() {
        return (
            <div className="data-container">
                        <div className="contact-container">
                            <div className="contact-title">
                                    Contact Me
                            </div>
                            <a href="https://www.linkedin.com/in/casey-rock-97279a18a/" target='_blank'>
                            <div className="contact-info">
                                <img src="/email-contact.png" className="circle-pic"></img>
                                <img src="/contact-phone.png" className="circle-pic"></img>

                         
                                <img src="/LinkedIn.png" className="circle-pic"></img>
                     
                               
                            </div>
                            </a>
                            
                            
                        </div>
                    </div>
        );
    }
}