import React, { Component } from 'react';
import './Lista.css';

class Lista extends Component {
  
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = {
      users : {
        datos : []
      }
    }; 
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://randomuser.me/api/?results=10')
      .then(response => response.json())
      .then(data => {
          console.log(data.results);
          this.setState({users: {datos : data.results} });
        });    
  }

  render() {
    console.log(this.state);
    return (
      <div className="Lista">
        <ul>
          {this.state.users.datos.map((user, index) => <li key={index}>{user.name.last}</li>)}
        </ul>
      </div>
    );
  }
}

export default Lista;
