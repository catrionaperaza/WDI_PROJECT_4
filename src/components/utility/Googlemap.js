/* global google */

import React from 'react';
import mapStyles from '../config/mapStyles';

class GoogleMap extends React.Component {

  componentDidMount() {
    this.map = new google.maps.Map(this.mapCanvas, {
      center: this.props.center || { lat: 51.51, lng: -0.09 },
      zoom: 14,
      clickableIcons: false,
      disableDefaultUI: true,
      styles: mapStyles
    });
  }

  componentDidUpdate() {
    this.markers = this.props.dinners.map(dinner => {
      return new google.maps.Marker({
        map: this.map,
        position: dinner.location,
        animation: google.maps.Animation.DROP
      });
    });
  }

  componentWillUnmount() {
    this.markers.forEach(marker => marker.setMap(null));
    this.markers = [];
    this.map = null;
  }

  render() {
    return (
      <div className="google-map" ref={element => this.mapCanvas = element}></div>
    );
  }
}

export default GoogleMap;
