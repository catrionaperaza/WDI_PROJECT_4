import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';

class Homepage extends React.Component {

  render() {
    return(
      <div>
        <h1>Welcome to Ho Ho Hosts! </h1>
        <p>Here are some of our success stories of dinners shared and enjoyed over Christmas....</p>
        { Auth.isAuthenticated() && <Link to={'/users'}><h2>See all profiles!</h2></Link>}
        { Auth.isAuthenticated() && <Link to={'/dinners'}><h2>See all dinners!</h2></Link>}
      </div>

    );
  }
}

export default Homepage;
