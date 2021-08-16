import React from "react";
import { TextField, Button, InputAdornment } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import "../css/ContactUs.css";

export default class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }
    setName = (ev) => {
        this.setState({name:ev.target.value});
    }

    setEmail = (ev) => {
        this.setState({email:ev.target.value});
    }

    sendEmail = async () => {
        let span = document.getElementById('contact-message-span');
        span.innerHTML = '';
        if(!this.state.name){
            span.innerHTML = "Please enter your name";
            return
        }
        if(!this.state.email || !this.state.email.includes("@") || !this.state.email.includes('.')) {
            span.innerHTML = "Please enter a valid email";
            return
        }
        let data = JSON.stringify({name:this.state.name,email:this.state.email});
        const response = await fetch("https://us-central1-cyberdojo-e9bd6.cloudfunctions.net/app/sendEmail", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: data // body data type must match "Content-Type" header
        });
        let res = await response.json();
        console.log("res is ",res)
    }

    render() {
        return (
            <div className="contact-container">
                <div className="contact-form">
                    <div style={{ display: "inline-block", margin: "auto" }}>
                        <h1 className="contact-title">
                            Contact Us
                        </h1>
                    </div>
                    <TextField
                        onChange={this.setName}
                        id="contact-input-name"
                        className="contact-input"
                        label="Name"
                        variant="outlined"
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        }
                    />
                    <TextField 
                        onChange={this.setEmail}
                        id="contact-input-email" 
                        className="contact-input" 
                        label="Email" 
                        variant="outlined" 
                    />
                    <span id="contact-message-span">

                    </span>
                    <div className='contact-button-container'>
                        <Button onClick={this.sendEmail} variant="outlined" size="medium">
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}