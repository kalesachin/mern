import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route,useParams, Link } from "react-router-dom";
import { navbar,nav,navDropdown,Form,FormControl,Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"
import "./modules/scripts.js";
import ContactUs from "./components/ContactUs";
import DashBoard from "./components/DashBoard";
import Status from "./components/Status";
import UsersList from "./components/Users";

import Home from "./components/Home";
//import AboutUs from "./components/tutorial.component";
//import ContactUs from "./components/tutorials-list.component";

class App extends Component {
    /*handleClick = () => {    console.log('this is:', this);  
//    event.preventDefault();
    document.body.classList.toggle('sb-sidenav-toggled');
    localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
    }*/
  render() {
    return (
        <Router> 
        <div class="d-flex" id="wrapper">
      
        <div class="border-end bg-white" id="sidebar-wrapper">
            <div class="sidebar-heading border-bottom bg-light">My portFolio</div>
            <div class="list-group list-group-flush">
                <a class="list-group-item list-group-item-action list-group-item-light p-3" href="/dashboard">Dashboard</a>
                <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Shortcuts</a>
                <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Overview</a>
                <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Events</a>
                <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Profile</a>
                <a class="list-group-item list-group-item-action list-group-item-light p-3" href="/status">Status</a>
            </div>
        </div>
      
        <div id="page-content-wrapper">
      
            <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <div class="container-fluid">
                    <button class="btn btn-primary" id="sidebarToggle">Collapse</button>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                            <li class="nav-item active"><a class="nav-link" href="/home">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="/ContactUs">ContactUs</a></li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#!" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#!">Action</a>
                                    <a class="dropdown-item" href="#!">Another action</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#!">Something else here</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
              
        <div className="container mt-3">
       <Switch>
           <Route exact path={["/","/DashBoard"]} component={DashBoard} />
           <Route exact path="/contactus" component={ContactUs} />
           <Route exact path="/status" component={UsersList} />
           <Route exact path="/home" component={Home} />
       </Switch>          
       </div>    
       
       </div>
       </div>
       </Router>
    );
  }
}

export default App;
