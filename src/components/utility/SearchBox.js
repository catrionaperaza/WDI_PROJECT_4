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
      const newPlace = this.searchBox.getPlaces()[0];

      const latLng = {
        lat: newPlace.geometry.location.lat(),
        lng: newPlace.geometry.location.lng()
      };

      this.props.handleUserMarkerData(latLng);
    });

    // if (places.length == 0) {
    //   return;
    // }
    // this.bounds = new google.maps.LayLngBounds();
    // }
  }


  // componentDidUpdate() {
  //   this.markers = this.place
  //     const Marker = new google.maps.Marker({
  //       map: this.map,
  //       position: location,
  //       animation: google.maps.Animation.DROP
  //     });
  //
  //     return Marker;
  //   };
  //
  //
  // this.map.fitBounds(this.bounds);




  render(){
    return(
      <input ref={element => this.input = element} />
    );
  }
}

export default SearchBox;
