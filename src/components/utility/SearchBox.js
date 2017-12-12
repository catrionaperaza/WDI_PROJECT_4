/* global google */
import React from 'react';

class SearchBox extends React.Component {
  componentDidMount() {
    console.log(google.maps.places, 'google.maps.places');
    this.searchBox = new google.maps.places.SearchBox(this.input);

    this.searchBox.addListener('places_changed', () => {
      const newPlace = this.searchBox.getPlaces()[0];

      const latLng = {
        lat: newPlace.geometry.location.lat(),
        lng: newPlace.geometry.location.lng()
      };

      this.props.handleUserMarkerData(latLng);
    });
  }

  render(){
    return(
      <input ref={element => this.input = element} />
    );
  }
}

export default SearchBox;
