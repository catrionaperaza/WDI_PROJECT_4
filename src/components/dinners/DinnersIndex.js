import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import SearchBox from '../utility/SearchBox';

import Auth from '../../lib/Auth';

import GoogleMap from '../utility/GoogleMap';

class DinnersIndex extends React.Component {

  state = {
    dinners: [],
    userMarker: {},
    userRadius: null
  }

  componentDidMount() {
    Axios
      .get('/api/dinners', {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(res => this.setState({ dinners: res.data }))
      .catch(err => console.log(err));
  }

  handleUserMarkerData = (latLng) => {
    console.log('inside dinners index', latLng);
    this.setState({ userMarker: latLng });
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
          <SearchBox handleUserMarkerData={this.handleUserMarkerData}/>
          <GoogleMap userMarker={this.state.userMarker} dinners={this.state.dinners} />
          {this.state.dinners.map(dinner => {
            return(
              <div key={dinner.id} className="image-tile col-md-4 col-sm-6 col-xs-12">
                <Link to={`/dinners/${dinner.id}`} >
                  <h2>Event: {dinner.title}</h2></Link>
                {dinner.createdBy && <h3>Host: {dinner.createdBy.name}</h3>}
                <p>Number of places: {dinner.avail_places}</p>
                <p>Description: {dinner.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}


export default DinnersIndex;
