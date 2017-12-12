import React from 'react';
import { Link } from 'react-router-dom';

import { Grid, Row, Col, Image } from 'react-bootstrap';

import Auth from '../../lib/Auth';

class Homepage extends React.Component {

  render() {
    return(
      <Grid>
        <Row className="show-grid">
          <Col md={6} mdPush={6}><code></code></Col>
          <Col md={6} mdPull={6}><code></code></Col>
        </Row>

        <h1>Welcome to Ho Ho Hosts! </h1>
        <h2>Here are some of our success stories of dinners shared and enjoyed over Christmas....</h2>
        { Auth.isAuthenticated() && <Link to={'/users'}><h3>See profiles, both attendees and hosts near you! </h3></Link>}
        { Auth.isAuthenticated() && <Link to={'/dinners'}><h3>See all dinner events near you!</h3></Link>}

        <Row className="show-grid">
          <Col xs={6} md={4}><Image src="../../scss/1.jpg" /></Col>
          <Col xs={6} md={4}><Image src="../../scss/2.jpg" /></Col>
          <Col xsHidden md={4}><Image src="../../scss/3.jpg" /></Col>
        </Row>
        <Row className="show-grid">
        </Row>
      </Grid>


    );
  }
}

export default Homepage;
