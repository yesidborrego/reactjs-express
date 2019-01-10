import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

componentDidMount() {
  axios
    .get('/api/users')
    .then( res => {
      this.setState({
        users: res.data.users
      });
    })
    .catch(e => {
      console.log('error:', e);
    })
 }

  render(){
    let users = this.state.users;
    return(
      <ul className="list-group">
        {
          users.map( (user, index) => {
            return <li key={index} className="list-group-item">{user.nombre}</li>
          })
        }
      </ul>
    )
  }
};

export default App;