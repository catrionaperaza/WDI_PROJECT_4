import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import Auth from '../../lib/Auth';

class UsersShow extends React.Component {
  state = {
    user: []
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
            <h1>Dinner {this.state.user.attendeeOrHost} Profile</h1>
          </div>
        </div>
        <div className="row">
          <div className="image-tile col-md-6 col-sm-6 col-xs-12">
            <img src={this.state.user.image} className="img-responsive" />
          </div>
          <div className="col-md-6">
            <h2>Name of {this.state.user.attendeeOrHost}: {this.state.user.name}</h2>
            <h4>Location: {this.state.user.formatted_address}</h4>
            <h4>Bio: {this.state.user.bio}</h4>
            <h4>Contact Details: {this.state.user.email}</h4>
            {console.log(this.state.user)}
            { this.state.user.dinnersCreated && this.state.user.dinnersCreated.map(dinner => {
              return(
                <div key={dinner.id} >
                  <h4><Link to={`/dinners/${dinner.id}`}>Come to my dinner:<strong> {dinner.title}</strong></Link></h4>
                </div>
              );
            })}
            { this.state.user.dinnersAttending && this.state.user.dinnersAttending.map(dinner => {
              return(
                <div key={dinner.id} >
                  <h4><Link to={`/dinners/${dinner.id}`}>Dinner I am Attending:<strong> {dinner.title}</strong></Link></h4>
                </div>
              );
            })}
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
