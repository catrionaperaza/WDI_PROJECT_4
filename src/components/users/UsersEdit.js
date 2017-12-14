import React from 'react';
import Axios from 'axios';

import Auth from '../../lib/Auth';
import UsersForm from './UsersForm';

class UsersEdit extends React.Component {
  state = {
    user: {
      name: '',
      formatted_address: '',
      email: '',
      image: '',
      bio: '',
      guestOrHost: ''
    }
  };

  componentDidMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }

  handleChange = ({ target: { name, value } }) => {
    const user = Object.assign({}, this.state.user, { [name]: value });
    this.setState({ user });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .put(`/api/users/${this.props.match.params.id}`, this.state.user, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(res => this.props.history.push(`/users/${res.data.id}`))
      .catch(err => console.log(err));
  }

  handleLocationChange = (name, formatted_address, location) => {
    const user = Object.assign({}, this.state.user, { name, formatted_address, location });
    this.setState({ user });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="page-banner col-md-12">
            <h1>Edit your Profile</h1>
            <UsersForm
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              user={this.state.user}
              handleLocationChange={this.handleLocationChange}
              {...this.state}
            />
          </div>
        </div>
      </div>
    );
  }

}

export default UsersEdit;
