import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

// import SearchBox from '../utility/SearchBox';
import GoogleMap1 from '../utility/GoogleMap1';

import Auth from '../../lib/Auth';

class UsersIndex extends React.Component {

  state = {
    users: [],
    userMarker: {}
  }

  componentDidMount() {
    Axios
      .get('/api/users', {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(res => this.setState({ users: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="row">
          {/* <SearchBox /> */}
          <GoogleMap1 userMarker={this.state.userMarker} users={this.state.users} />
          { this.state.users.map(user => {
            return(
              <div key={user.id} >
                { Auth.isAuthenticated() &&
                <Link to={`/users/${user.id}`}>
                  <h2>Name: {user.name}</h2></Link> }
                <h4>Location: {user.formatted_address}</h4>
                <h4>Attendee or Host: {user.attendeeOrHost}</h4>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}


export default UsersIndex;
