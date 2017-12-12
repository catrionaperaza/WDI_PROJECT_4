/* global google */
import React from 'react';



//create the search box and link to the UI element but needs to render DinnersIndex page (where map is)
//Bias the SearchBox results towards map's viewport
//return DinnersIndex - place of search and a Xmile radius

class SearchBox extends React.Component {
  componentDidMount() {
    console.log(google.maps.places, 'google.maps.places');
    this.searchBox = new google.maps.places.SearchBox(this.input);

    this.searchBox.addListener('places_changed', () => {
      console.log(this.searchBox.getPlaces());
      const place = this.searchBox.getPlaces();
      const { name, formatted_address } = place;
      const location = place.geometry.location.toJSON();

      this.props.handleChange(name, formatted_address, location);
    });

    if (places.length == 0) {
      return;
    }
    this.infoWindow = google.maps.InfoWindow() => {
    this.bounds = new google.maps.LayLngBounds();
    }
  }


  componentDidUpdate() {
    this.markers = this.place
      const Marker = new google.maps.Marker({
        map: this.map,
        position: place.location,
        animation: google.maps.Animation.DROP
      });

      return Marker;
    });

    this.map.fitBounds(this.bounds);
  }


  render () {
    return(
      <input ref={element => this.input = element} />
    );
  }
}

export default SearchBox;
