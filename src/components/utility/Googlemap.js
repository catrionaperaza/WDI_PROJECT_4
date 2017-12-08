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
    this.markers = this.props.dinners.map(dinner => {
      const marker = new google.maps.Marker({
        map: this.map,
        position: dinner.location,
        animation: google.maps.Animation.DROP
      });

      this.bounds.extend(dinner.location);

      marker.addListener('click', () => {
        this.infoWindow.setContent(`
          <a href=${`/dinners/${dinner.id}`} />
          <h2>${dinner.title}</h2>
        `);
        this.infoWindow.open(this.map, marker);
      });

      return marker;
    });

    this.map.fitBounds(this.bounds);
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
