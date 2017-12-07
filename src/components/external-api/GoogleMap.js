/* global google */

import React from 'react';
import mapStyles from '../../config/mapStyles';

class GoogleMap extends React.Component {

  componentDidMount() {
    this.map = new google.maps.Map(document.getElementsByClassName('google-map')[0], {
      center: this.props.center,
      zoom: 14,
      styles: mapStyles
    });

    this.marker = new google.maps.Marker({
      map: this.map,
      position: { lat: 51.51, lng: -0.09 }
    });
  }

  componentWillUnmount() {
    this.marker.setMap(null);
    this.marker = null;
    this.map = null;
  }

  render() {
    return (
      <div className="google-map">Google Map goes here...
      </div>
    );
  }
}

export default GoogleMap;
