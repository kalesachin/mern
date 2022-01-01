import React, { Component } from "react";
import { connect } from "react-redux";

class ContactUs extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          humor: 'happy'
        }
      }
      render() {
        
    return (
        <div>
          <div>I am an element!</div>
          <button>I am another element</button>
        </div>
      );
      }
    }
export default ContactUs;   