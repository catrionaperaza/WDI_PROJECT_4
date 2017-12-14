import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import SearchBox from '../utility/SearchBox';
import Slider from '../utility/Slider';

import Auth from '../../lib/Auth';

import GoogleMap from '../utility/GoogleMap';

class DinnersIndex extends React.Component {

  state = {
    dinners: [],
    userMarker: {},
    radius: 8000
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

  updateRadius = (e) => this.setState({ radius: Number(e.target.value) });

  render() {
    return (
      <div>
        <div className="row">
          <div className="page-banner col-md-12">
            { Auth.isAuthenticated() && <Link to="/dinners/new" className="main-button">
              Create Dinner Event
            </Link>}
          </div>
          <Slider updateRadius={this.updateRadius} value={this.state.radius} />
          <SearchBox handleUserMarkerData={this.handleUserMarkerData}/>
          <GoogleMap userMarker={this.state.userMarker} dinners={this.state.dinners} radius={this.state.radius} />
          {this.state.dinners.map(dinner => {
            return(
              <div key={dinner.id} className="image-tile col-md-4 col-sm-6 col-xs-12">
                <Link to={`/dinners/${dinner.id}`} >
                  <h2>Event: {dinner.title}</h2></Link>
                {dinner.createdBy && <h2>Host: {dinner.createdBy.name}</h2>}
                <h2>Number of places: {dinner.avail_places}</h2>
                <h2>Description: {dinner.description}</h2>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}


export default DinnersIndex;
