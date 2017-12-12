/* global google */

import React from 'react';
import mapStyles from '../config/mapStyles';

class GoogleMap1 extends React.Component {

  componentDidMount() {
    this.map = new google.maps.Map(this.mapCanvas, {
      center: this.props.center || { lat: 51.51, lng: -0.09 },
      zoom: 14,
      clickableIcons: false,
      disableDefaultUI: true,
      styles: mapStyles
    });

    this.infoWindow = new google.maps.InfoWindow();
    this.bounds = new google.maps.LatLngBounds();
  }


  componentDidUpdate() {
    this.markers =
    this.props.users.map(user => {
      const Marker = new google.maps.Marker({
        map: this.map,
        position: user.location,
        animation: google.maps.Animation.DROP
      });

      this.bounds.extend(user.location);

      Marker.addListener('click', () => {
        this.infoWindow.setContent(`
          <a href=${`/users/${user.id}`} />
          <h2>${user.name}</h2>
          `);
        this.infoWindow.open(this.map, Marker);
      });

      return Marker;
    });

    this.map.fitBounds(this.bounds);
  }

  componentWillUnmount() {
    this.markers && this.markers.forEach(marker => marker.setMap(null));
    this.markers = [];
    this.map = null;
  }

  render() {
    return (
      <div className="google-map" ref={element => this.mapCanvas = element}></div>
    );
  }
}

export default GoogleMap1;
