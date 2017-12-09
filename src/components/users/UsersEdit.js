import React from 'react';
import Axios from 'axios';

import Auth from '../../lib/Auth';
import RegisterForm from './auth/RegisterForm';

class UsersEdit extends React.Component {
  state = {
    user: {
      name: '',
      formatted_address: '',
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      image: '',
      bio: ''
    }
  };

  componentDidMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`)
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
      .then(res=> this.props.history.push(`/user/${res.data.id}`))
      .catch(err=> console.log(err));
  }

  render() {
    return (
      <RegisterForm
        history={this.props.history}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        user={this.state.user}
      />
    );
  }

}

export default UsersEdit;
