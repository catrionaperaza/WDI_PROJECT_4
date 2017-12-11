import React from 'react';
import Axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

import Auth from '../../lib/Auth';

class botNavBar extends React.Component {

  state = {
    user: {}
  }

  componentWillMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data}))
      .catch(err => console.log(err));
  }

  deleteDinner = () => {
    Axios
      .delete(`/api/users/${this.props.match.params.id}`, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <nav>
        { Auth.isAuthenticated() && <Link to={`/users/${this.state.user.id}/edit`} className="standard-button">Edit Profile
        </Link>}
        {' '}
        { Auth.isAuthenticated() && <button className="main-button" onClick={this.deleteUser}>
        Delete Profile
        </button>}
      </nav>

    );
  }
}

export default withRouter(botNavBar);
