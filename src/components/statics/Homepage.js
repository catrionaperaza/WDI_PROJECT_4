import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

// import { Grid, Row, Col, Image } from 'react-bootstrap';

import Auth from '../../lib/Auth';

class Homepage extends React.Component {
  state = {
    user: {}
  }

  componentDidMount() {
    Auth.isAuthenticated() &&

    Axios
      .get(`/api/users/${Auth.getPayload().userId}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(res => this.setState({ user: res.data}))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="page-banner col-md-12">
            <h1>Welcome to Ho Ho Hosts! </h1>
            <h2>Here are some of our success stories of dinners shared and enjoyed over Christmas....</h2>
            { Auth.isAuthenticated() && <Link to={'/users'}><h3>See profiles, both attendees and hosts near you! </h3></Link>}
            { '' }
            { Auth.isAuthenticated() && <Link to={'/dinners'}><h3>See all dinner events near you!</h3></Link>}
            { '' }
          </div>
        </div>
        {/* <div className="row">
          <div className="image-tile col-md-4 col-sm-6 col-xs-12">
            <img src="../assets/1.jpg" className="img-responsive" />
          </div>
          <div className="image-tile col-md-4 col-sm-6 col-xs-12">
            <img src="../assets/2.jpg" className="img-responsive" />
          </div>
          <div className="image-tile col-md-4 col-sm-6 col-xs-12">
            <img src="../assets/3.jpg" className="img-responsive" />
          </div>
        </div> */}

        { this.state.user.dinnersCreated && this.state.user.dinnersCreated.map(dinner => {
          return(
            <div key={dinner.id} >
              <h2><Link to={`/dinners/${dinner.id}`}> Dinners I am hosting: {dinner.title} <img src={dinner.image} className="img-responsive" /></Link></h2>

              {' '}
              {' '}
              {' '}

              {dinner.attendees.map((attendee, i) => {
                return(
                  <div key={i}>
                    <h2><Link to={`/users/${attendee}`}>Guest: {attendee.name}</Link></h2>
                  </div>
                );
              })}
            </div>
          );
        })}

        { this.state.user.dinnersAttending && this.state.user.dinnersAttending.map(dinner => {
          return(
            <div key={dinner.id} >
              <h2><Link to={`/dinners/${dinner.id}`}><strong>Dinners I am Attending: {dinner.title}<img src={dinner.image} className="img-responsive" /></strong></Link></h2>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Homepage;
