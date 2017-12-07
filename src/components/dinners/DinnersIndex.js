import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
// import GoogleMap from './components/GoogleMap';

import Auth from '../../lib/Auth';

class DinnersIndex extends React.Component {

  state = {
    dinners: []
  }


  componentDidMount() {
    Axios
      .get('/api/dinners')
      .then(res => this.setState({ dinners: res.data }))
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div>
        <div className="row">
          <div className="page-banner col-md-12">
            { Auth.isAuthenticated() && <Link to="/dinners/new" className="main-button">
              Create Dinner Event
            </Link>}
          </div>
          {this.state.dinners.map(dinner => {
            return(
              <div key={dinner.id} className="image-tile col-md-4 col-sm-6 col-xs-12">
                <Link to={`/dinners/${dinner.id}`}></Link>
                <h2>Event: {dinner.title}</h2>
                <h3>Number of places: {dinner.avail_places}</h3>
                <p>Description: {dinner.description}</p>
                <h3>Host: {this.state.dinner && this.state.dinner.user.createdBy}TBC</h3>
                {/* <GoogleMap center={this.state.center} /> */}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}


export default DinnersIndex;
<<<<<<< HEAD

<<<<<<< HEAD
export default DinnersIndex;
=======



state = {
    center: { lat: 52.3755, lng: -2.317 }
  };

  render() {
    return (
      <GoogleMap center={this.state.center} />
    );
  }
>>>>>>> frontend
=======
>>>>>>> frontend
