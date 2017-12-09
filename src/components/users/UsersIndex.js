import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import GoogleMap from '../utility/GoogleMap';

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
          <GoogleMap dinners={this.state.users} />
          {this.state.users.map(user => {
            return(
              <div key={user.id} className="image-tile col-md-4 col-sm-6 col-xs-12">
                <img src={this.state.user.image} className="img-responsive" />
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
