import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import Auth from '../../lib/Auth';

class UsersShow extends React.Component {
  state = {
    user: {}
  }

  componentWillMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(res => this.setState({ user: res.data}))
      .catch(err => console.log(err));
  }

  deleteUser = () => {
    Axios
      .delete(`/api/users/${this.props.match.params.id}`, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="page-banner col-md-12">
            <h1>Dinner Event Host Profile</h1>
          </div>
        </div>
        <div className="row">
          <div className="image-tile col-md-6 col-sm-6 col-xs-12">
            <img src={this.state.user.image} className="img-responsive" />
          </div>
          <div className="col-md-6">
            <h2>Name: {this.state.user.name}</h2>
            <h3>Location: {this.state.user.formatted_address}</h3>
            <p>Bio: {this.state.user.bio}</p>
            <h3>Contact Details: {this.state.user.email}</h3>
            <h3>Attendee or Host : {this.state.user.attendeeOrHost}</h3>
            {/* <h3> {this.state.dinner.createdBy}</h3> */}

            {/* { Auth.isAuthenticated() && <Link to={`/users/${this.state.user.id}/edit`} className="standard-button">Edit Profile
              </Link>}
              {' '} */}
            { Auth.isAuthenticated() && <button className="main-button" onClick={this.deleteUser}>
              Delete Profile
            </button>}
          </div>
        </div>
      </div>
    );
  }
}


export default UsersShow;
