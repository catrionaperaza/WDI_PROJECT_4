import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import Auth from '../../lib/Auth';

class DinnersShow extends React.Component {
  state = {
    dinner: {}
  }

  componentWillMount() {
    Axios
      .get(`/api/dinners/${this.props.match.params.id}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(res => this.setState({ dinner: res.data}))
      .catch(err => console.log(err));
  }

  deleteDinner = () => {
    Axios
      .delete(`/api/dinners/${this.props.match.params.id}`, {
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
            <h1> Dinner </h1>
          </div>
        </div>
        <div className="row">
          <div className="image-tile col-md-6">
            <img src={this.state.dinner.image} className="img-responsive" />
          </div>
          <div className="col-md-6">
            <h2>Event: {this.state.dinner.title}</h2>
            <p>Number of places: {this.state.dinner.avail_places}</p>
            <p>Description: {this.state.dinner.description}</p>
            {this.state.dinner.createdBy && <h3>Host: {this.state.dinner.createdBy.name}</h3>}
            { this.state.dinner.createdBy && <Link to={`/users/${this.state.dinner.createdBy.id}`} className="standard-button">Go to the host profile
            </Link>}
            <h4>Attendees:</h4> { this.state.dinner.attendees && this.state.dinner.attendees.map(attendee => {
              return(
                <div key={attendee.id} >
                  <h4><Link to={`/users/${attendee.id}`}><strong> {attendee.name}</strong></Link></h4>
                </div>
              );
            })}
            { this.state.dinner.createdBy && Auth.isAuthenticated() && Auth.getPayload().userId === this.state.dinner.createdBy.id && <Link to={`/dinners/${this.state.dinner.id}/edit`} className="standard-button">Edit your dinner
            </Link>}
            {' '}
            { this.state.dinner.createdBy && Auth.isAuthenticated() && Auth.getPayload().userId === this.state.dinner.createdBy.id && <button className="main-button" onClick={this.deleteDinner}>Delete your dinner
            </button>}
          </div>
        </div>
      </div>
    );
  }
}


export default DinnersShow;
