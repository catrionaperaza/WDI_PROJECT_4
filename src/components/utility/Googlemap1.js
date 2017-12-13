/* global google */

import React from 'react';
import mapStyles from '../config/mapStyles';

class GoogleMap1 extends React.Component {

  bounds = new google.maps.LatLngBounds();

  componentDidMount() {
    this.map = new google.maps.Map(this.mapCanvas, {
      center: this.props.center || { lat: 51.515419, lng: -0.141099 },
      zoom: 12,
      clickableIcons: false,
      // disableDefaultUI: true,
      styles: mapStyles
    });

    this.userMarker = new google.maps.Marker({ map: this.map });
  }


  componentWillUpdate(nextProps) {
    this.infoWindow = new google.maps.InfoWindow();

    if(Object.keys(nextProps.userMarker).length !== 0) {
      this.userMarker.setPosition(nextProps.userMarker);
      this.map.setCenter(nextProps.userMarker);
      this.map.setZoom(14);

      this.bounds.extend(nextProps.userMarker);
      this.filterMarkers();
    }

    if(nextProps.users.length !== this.props.users.length) {
      this.markers = nextProps.users.map(user => {
        const Marker = new google.maps.Marker({
          map: this.map,
          position: user.location,
          animation: google.maps.Animation.DROP
        });

        this.bounds.extend(user.location);

        Marker.addListener('click', () => {
          this.infoWindow.setContent(`
            <h2>${user.name}</h2>`);
          this.infoWindow.open(this.map, Marker);
        });

        return Marker;
      });
    }

    this.map.fitBounds(this.bounds);
  }

  filterMarkers = () => {
    if(this.userCircle) this.userCircle.setMap(null);

    this.userCircle = new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: this.map,
      center: this.userMarker.getPosition(),
      radius: 14400
    });

    this.bounds = this.userCircle.getBounds();
    this.map.fitBounds(this.bounds);

    this.markers.forEach(marker => {
      marker.setMap(this.map);

      if(!this.bounds.contains(marker.getPosition())) {
        marker.setMap(null);
      }
    });
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
