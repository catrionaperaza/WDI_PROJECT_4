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

    this.infoWindow = new google.maps.InfoWindow();
    this.bounds = new google.maps.LatLngBounds();
  }


  componentDidUpdate() {
    this.dinnerMarkers = this.props.dinners.map(dinner => {
      const dinnerMarker = new google.maps.Marker({
        map: this.map,
        position: dinner.location,
        animation: google.maps.Animation.DROP
      });
      this.userMarkers =
      this.props.users.map(user => {
        const userMarker = new google.maps.Marker({
          map: this.map,
          position: user.location,
          animation: google.maps.Animation.DROP
        });

      this.bounds.extend(dinner.location);
      this.bounds.extend(user.location);

      dinnerMarker.addListener('click', () => {
        this.infoWindow.setContent(`
          <a href=${`/dinners/${dinner.id}`} />
          <h2>${dinner.title}</h2>
        `);
        this.infoWindow.open(this.map, dinnerMarker);
      });

      userMarker.addListener('click', () => {
        this.infoWindow.setContent(`
          <a href=${`/users/${user.id}`} />
          <h2>${user.name}</h2>
        `);
        this.infoWindow.open(this.map, userMarker);
      });

      return dinnerMarker;
      return userMarker;
    });

    this.map.fitBounds(this.bounds);
  }

  componentWillUnmount() {
    this.dinnerMarkers.forEach(dinnerMarker => dinnerMarker.setMap(null));
    this.dinnerMarkers = [];
    this.map = null;
  }

  render() {
    return (
      <div className="google-map" ref={element => this.mapCanvas = element}></div>
    );
  }
}

export default GoogleMap;
