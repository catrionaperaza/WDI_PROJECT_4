import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import GoogleMap from '../utility/GoogleMap0';
import Auth from '../../lib/Auth';

class UsersIndex extends React.Component {

  state = {
    users: []

  }

  componentDidMount() {
    Axios
      .get('/api/users')
      .then(res => this.setState({ users: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="row">
          <GoogleMap users={this.state.users} />
          {this.state.users.map(user => {
            return(
              <div key={user.id} >
                <Link to={`/users/${user.id}`}>
                  <h2>Name: {user.name}</h2></Link>
                <h3>Location: {user.formatted_address}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}


export default UsersIndex;
