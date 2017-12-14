import React        from 'react';
import RegisterForm from './RegisterForm';
import Axios        from 'axios';

import Auth from '../../lib/Auth';

class Register extends React.Component {
  state = {
    user: {
      name: '',
      formatted_address: '',
      email: '',
      password: '',
      image: '',
      bio: '',
      guestOrHost: ''
    }
  };

  handleChange = ({ target: { name, value }}) => {
    const user = Object.assign({}, this.state.user, { [name]: value });
    this.setState({ user });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .post('/api/register', this.state.user)
      .then(res => {
        Auth.setToken(res.data.token);
        this.props.history.push('/');
      })
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
            <h1>Register</h1>
            <RegisterForm
              user={this.state.user}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              handleLocationChange={this.handleLocationChange}
              {...this.state}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
