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
            { Auth.isAuthenticated() && <h2><Link to={'/users'}>Search for Dinner Attendees and Hosts near you!<img src={'https://cdn3.iconfinder.com/data/icons/maps-and-navigation-7/65/68-512.png'} className="img-responsive icons" /></Link></h2>}
            { '' }
            { Auth.isAuthenticated() && <h2><Link to={'/dinners'}>Search for Dinners hosted near you!<img src={'http://www.pvhc.net/img36/bmnfxduyaeokrqglccrw.png'} className="img-responsive icons" /></Link></h2>}
            { '' }
          </div>
        </div>

        { this.state.user.dinnersCreated && this.state.user.dinnersCreated.map(dinner => {
          return(
            <div key={dinner.id} >
              <h2><Link to={`/dinners/${dinner.id}`}> Dinners I am hosting: {dinner.title}<img src={dinner.image} className="img-responsive" /></Link></h2>

              {' '}
              {' '}
              {' '}
            </div>
          );
        })
        }

        { this.state.user.dinnersAttending && this.state.user.dinnersAttending.map(dinner => {
          return(
            <div key={dinner.id} >
              <h2><Link to={`/dinners/${dinner.id}`}><strong>Dinners I am Attending: {dinner.title}<img src={dinner.image}  className="img-responsive" /></strong></Link></h2>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Homepage;
