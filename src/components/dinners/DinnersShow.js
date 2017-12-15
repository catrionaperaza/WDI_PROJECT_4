import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

// import Comment from '../utility/Comment';

import Auth from '../../lib/Auth';
import DinnerCommentForm from './DinnerCommentForm';

class DinnersShow extends React.Component {
  state = {
    dinner: {},
    comment: {
      body: ''
    }
  }

  componentWillMount() {
    Axios
      .get(`/api/dinners/${this.props.match.params.id}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(res => this.setState({ dinner: res.data}, () => console.log(this.state)))
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

  handleChange = ({ target: { name, value }}) => {
    const comment = Object.assign({}, this.state.comment, { [name]: value });
    this.setState({ comment });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(Auth.getToken());
    Axios
      .post(`/api/dinners/${this.props.match.params.id}/comments`, this.state.comment, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(res => this.setState({ dinner: res.data, comment: { body: '' } }), () => {
        console.log(this.state);
      })//ref to new state with historical comments
      .catch(err=> console.log(err));
  }

  //Add delete comment

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
            { this.state.dinner.createdBy && <Link to={`/users/${this.state.dinner.createdBy.id}`} className="host-button">Go to the host profile
            </Link>}
            <h4>Guests:</h4> { this.state.dinner.guests && this.state.dinner.guests.map(guest => {
              return(
                <div key={guest.id} >
                  <h4><Link to={`/users/${guest.id}`}><strong> {guest.name}</strong></Link></h4>
                </div>
              );
            })}
            { this.state.dinner.createdBy && Auth.isAuthenticated() && Auth.getPayload().userId === this.state.dinner.createdBy.id && <Link to={`/dinners/${this.state.dinner.id}/edit`} className="standard-button">Edit your dinner
            </Link>}
            {' '}
            { this.state.dinner.createdBy && Auth.isAuthenticated() && Auth.getPayload().userId === this.state.dinner.createdBy.id && <button className="delete-button" onClick={this.deleteDinner}>Delete your dinner
            </button>}
          </div>
        </div>

        <div className="row">
          <div className="image-tile col-md-4">
            <h4>Comments:</h4>
            { this.state.dinner && this.state.dinner.guests && this.state.dinner.guests.map(guest => {
              return (
                <div key={guest.id} >
                  <h4><Link to={`/users/${guest.id}`}><strong> {guest.name}</strong></Link></h4>
                </div>
              );
            })}
          </div>
          { this.state.dinner.comments &&
            <div className="col-md-8">
              { this.state.dinner.comments.map(comment => {
                return (
                  <div key={comment.id}>
                    <h6>Comment by: {comment.createdBy.name} </h6>
                    <p>{ comment.body }</p>
                    <h6>Comment created at: { comment.createdAt }</h6>
                  </div>
                );
              })}
            </div>}
        </div>
        <div className="col-md-12">
          <DinnerCommentForm
            comment={this.state.comment}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}


export default DinnersShow;
