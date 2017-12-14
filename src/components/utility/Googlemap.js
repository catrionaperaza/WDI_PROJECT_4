/* global google */

import React from 'react';
import mapStyles from '../config/mapStyles';

class GoogleMap extends React.Component {

  bounds = new google.maps.LatLngBounds();
  userCircle = new google.maps.Circle({
    strokeColor: '#F16664',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#F16664',
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

    const userMarkerImage = {
      url: 'https://uploads.knightlab.com/storymapjs/532264b9873bd052bea5c420d2249cfc/potential-medical-marijuana-shops/_images/pin_1-512.png',
      scaledSize: new google.maps.Size(50,50)
    };

    this.userMarker = new google.maps.Marker({
      map: this.map,
      icon: userMarkerImage
    });
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

    const image = this.props.markerType === 'dinner' ? {
      url: 'http://www.pvhc.net/img36/bmnfxduyaeokrqglccrw.png',
      scaledSize: new google.maps.Size(65,63)
    } : {
      url: 'https://cdn3.iconfinder.com/data/icons/maps-and-navigation-7/65/68-512.png',
      scaledSize: new google.maps.Size(65,63)
    };

    if(nextProps.markers.length !== this.props.markers.length) {
      this.markers = nextProps.markers.map(data => {
        const marker = new google.maps.Marker({
          map: this.map,
          position: data.location,
          animation: google.maps.Animation.DROP,
          icon: image
        });

        this.bounds.extend(data.location);

        const content = this.props.markerType === 'dinner' ? `
          <a href=${`/dinners/${data.id}`} />
            <p>${data.title}, hosted by ${data.createdBy.name}</p>
          </a>
        ` : `
        <a href=${`/users/${data.id}`} />
          <p>${data.name}</p>
        </a>
        `;

        marker.addListener('click', () => {
          this.infoWindow.setContent(content);
          this.infoWindow.open(this.map, marker);
        });

        return marker;
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
