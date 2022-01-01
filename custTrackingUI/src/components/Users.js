import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import Donut from "./charts/Donut";

import {connect} from "react-redux";
import { retrieveUsers } from '../actions/users';
import { Link } from 'react-router-dom';
//import "./tableStyle.css";

class UsersList extends Component{
  constructor(props) {
    super(props);
   // this.retrieveUsers = this.retrieveUsers.bind(this);

    this.state = {
      currentUser: null
    };
  }




componentDidMount() {
  this.props.retrieveUsers();
}

render(){
  const { users } = this.props;
  return(

    <ul className="list-group">
            {users &&
              users.map((user, index) => (
                <li
                  className={
                    "list-group-item " // +
                   // (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveContact(user, index)}
                  key={index}
                >
                  <table id="customers">
                  <thead>
                    <tr>
                      <th>Sr.No.</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      
                      <th>E-mail</th>
                      <th>Phone Number</th>
                      
                      <th>Query For</th>
                      <th>Query Details</th>
                      <th>Budget Min</th>
                      <th>Budget Max</th>
                      <th>Decision Maker</th>
                   </tr>
                  </thead>
                  <tbody>
                      <tr>
                      <td>{index}</td>               
                      <td>{user.First_Name}</td>
                      <td>{user.Last_Name}</td>                       
                      
                      <td>{user.e_mail}</td>
                      <td>{user.phone}</td>
                      
                      <td>{user.QueryFor}</td>
                      <td>{user.QueryDetails}</td>
                      <td>{user.BudgetMin}</td>
                      <td>{user.BudgetMax}</td>
                      <td>{user.decisionMaker}</td>
                      </tr>
                      </tbody>                      
                  </table>
                </li>
              ))}
          </ul>

  );
}
}

/*
function Hello() {
    return (
      <div className="App">
        <div className="container">
          <div className="section">
            <Donut />
          </div>
        </div>
      </div>
    );
}

const Status = Hello;
export default Status;
*/

/*
const Status = () => {
    return (
      <div className="App">
        <div className="container">
          <div className="section">
            <Donut />
          </div>
        </div>
      </div>
    );
}
*/
//export default UsersList;

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, { retrieveUsers})(UsersList);