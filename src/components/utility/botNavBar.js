import React from 'react';
import { withRouter } from 'react-router-dom';

const botNavBar = ({ user }) => {

  return (
    <nav>
      <h1>{user}</h1>


      {/* { Auth.isAuthenticated() && <Link to={`/users/${this.state.user.id}/edit`} className="standard-button">Edit Profile
        </Link>}
        {' '}
        { Auth.isAuthenticated() && <button className="main-button" onClick={this.deleteUser}>
        Delete Profile
        </button>} */}
    </nav>

  );
};

export default withRouter(botNavBar);
