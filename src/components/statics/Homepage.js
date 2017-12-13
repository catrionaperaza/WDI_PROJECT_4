import React from 'react';
import { Link } from 'react-router-dom';

// import { Grid, Row, Col, Image } from 'react-bootstrap';

import Auth from '../../lib/Auth';

class Homepage extends React.Component {
  state = {
    dinner: {}
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="page-banner col-md-12">
            <h1>Welcome to Ho Ho Hosts! </h1>
            <h2>Here are some of our success stories of dinners shared and enjoyed over Christmas....</h2>
            { Auth.isAuthenticated() && <Link to={'/users'}><h3>See profiles, both attendees and hosts near you! </h3></Link>}
            { Auth.isAuthenticated() && <Link to={'/dinners'}><h3>See all dinner events near you!</h3></Link>}
          </div>
        </div>
        <div className="row">
          <div className="image-tile col-md-4 col-sm-6 col-xs-12">
            <img src="../assets/1.jpg" className="img-responsive" />
          </div>
          <div className="image-tile col-md-4 col-sm-6 col-xs-12">
            <img src="../assets/2.jpg" className="img-responsive" />
          </div>
          <div className="image-tile col-md-4 col-sm-6 col-xs-12">
            <img src="../assets/3.jpg" className="img-responsive" />
          </div>
        </div>
      </div>


    );
  }
}

export default Homepage;
