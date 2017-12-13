/* global google */

import React from 'react';
import mapStyles from '../config/mapStyles';

class GoogleMap extends React.Component {

  bounds = new google.maps.LatLngBounds();
  userCircle = new google.maps.Circle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });

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
    this.userCircle.setRadius(nextProps.radius);
    this.infoWindow = new google.maps.InfoWindow();

    if(Object.keys(nextProps.userMarker).length !== 0) {
      this.userMarker.setPosition(nextProps.userMarker);
      this.map.setCenter(nextProps.userMarker);
      this.map.setZoom(14);

      this.bounds.extend(nextProps.userMarker);
      this.filterMarkers();
    }

    if(nextProps.dinners.length !== this.props.dinners.length) {
      this.markers = nextProps.dinners.map(dinner => {
        const Marker = new google.maps.Marker({
          map: this.map,
          position: dinner.location,
          animation: google.maps.Animation.DROP
        });

        this.bounds.extend(dinner.location);

        Marker.addListener('click', () => {
          this.infoWindow.setContent(`
            <a href=${`/dinners/${dinner.id}`} />
            <p>${dinner.title}, hosted by ${dinner.createdBy.name}</p>
            `);
          this.infoWindow.open(this.map, Marker);
        });

        return Marker;
      });
    }

    this.map.fitBounds(this.bounds);
  }

  filterMarkers = () => {
    if(this.userCircle) this.userCircle.setMap(null);

    this.userCircle.setMap(this.map);
    this.userCircle.setCenter(this.userMarker.getPosition());
    this.userCircle.setRadius(this.props.radius);

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

export default GoogleMap;
