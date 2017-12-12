import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Auth from '../../lib/Auth';
import BackButton from '../utility/BackButton';

const Navbar = ({ history }) => {

  function logout(e) {
    e.preventDefault();

    Auth.removeToken();
    history.push('/');
  }

  return(
    <nav>
      { !Auth.isAuthenticated() && <Link to="/login" className="standard-button">Login</Link>}
      {' '}
      { !Auth.isAuthenticated() && <Link to="/register" className="standard-button">Register</Link>}
      {' '}
      { Auth.isAuthenticated() && <Link to={'/'} className="standard-button">Home</Link> }
      {' '}
      { Auth.isAuthenticated() && <Link to={`/users/${Auth.getPayload().userId}/edit`} className="standard-button">Edit Profile</Link> }
      {' '}
      { Auth.isAuthenticated() && <Link to={'/dinners/new'} className="standard-button">Create a dinner</Link> }
      {' '}
      { Auth.isAuthenticated() && <Link to={'/'} className="standard-button">Your dinners</Link> }
      {' '}
      { Auth.isAuthenticated() && <a href="#" className="standard-button" onClick={logout}>Logout</a>}
      {' '}
      <BackButton />
    </nav>
  );
};

export default withRouter(Navbar);
