import React, { Component } from "react";
import { connect } from "react-redux";

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

const element = <Welcome name="Faisal Arkan" />;

class ContactUs extends Component {
    

  constructor(props) {
    super(props);
      
    // We declare the state as shown below
    
    this.state = {                           
      x: "This is x from state",    
      y: "This is y from state"
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.x}</h1>
        <h2>{this.state.y}</h2>
      </div>
    );
  }
    }
export default ContactUs;   