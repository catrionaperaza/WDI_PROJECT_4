import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import SearchBox from '../utility/SearchBox';
import GoogleMap from '../utility/GoogleMap';

import Auth from '../../lib/Auth';
import Slider from '../utility/Slider';

class UsersIndex extends React.Component {

  state = {
    users: [],
    userMarker: {},
    radius: 8000
  }

  componentDidMount() {
    Axios
      .get('/api/users', {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(res => this.setState({ users: res.data }))
      .catch(err => console.log(err));
  }

  handleUserMarkerData = (latLng) => {
    console.log('inside dinners index', latLng);
    this.setState({ userMarker: latLng });
  }

  updateRadius = (e) => this.setState({ radius: Number(e.target.value) });

  render() {
    return (
      <div>
        <div className="row">
          <h1>Guests and Hosts</h1>
          <div className="search">
            <h3>Where do you want to look for guests?</h3>
            <SearchBox handleUserMarkerData={this.handleUserMarkerData}/>
          </div>
          <div className="slider">
            <h3>Guests proximity to your dinner event. Adjust the radius slider here: </h3>
            <br></br>
            <Slider updateRadius={this.updateRadius} value={this.state.radius} />
          </div>
          <GoogleMap userMarker={this.state.userMarker} markers={this.state.users} radius={this.state.radius} markerType="user" />
          { this.state.users.map(user => {
            return(
              <div key={user.id} className="image-tile col-md-4 col-sm-6 col-xs-12">
                { Auth.isAuthenticated() &&
                <Link to={`/users/${user.id}`}>
                  <h2>Name: {user.name}</h2></Link> }
                <h3>Location: {user.formatted_address}</h3>
                <h3>Guest or Host: {user.guestOrHost}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}


export default UsersIndex;
