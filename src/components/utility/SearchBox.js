/* global google */
import React from 'react';


//create the search box and link to the UI element
//Bias the SearchBox results towards current map's viewport
//autocomplete element too?
//redirect to DinnersIndex map results

class SearchBox extends React.Component {
  componentDidMount() {
    console.log(google.maps.places, 'google.maps.places');
    this.searchBox = new google.maps.places.searchBox(this.input);
    // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);


    this.searchBox.addListener('bounds_changed', () => {
      console.log(listening);
      // searchBox.setBounds(map.getBounds());




    //   console.log(this.autocomplete.getPlace());
    //   const place = this.autocomplete.getPlace();
    //   const { name, formatted_address } = place;
    //   const location = place.geometry.location.toJSON();
    //
    //   this.props.handleChange(name, formatted_address, location);
    // });
  }

  render() {
    return(
      <input ref={element => this.input = element} />
    );
  }
}

export default SearchBox;

// // Create the search box and link it to the UI element.
//         var input = document.getElementById('pac-input');
//         var searchBox = new google.maps.places.SearchBox(input);
//         map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
//
//         // Bias the SearchBox results towards current map's viewport.
//         map.addListener('bounds_changed', function() {
//           searchBox.setBounds(map.getBounds());
//         });

//
// var defaultBounds = new google.maps.LatLngBounds(
//   new google.maps.LatLng(-33.8902, 151.1759),
//   new google.maps.LatLng(-33.8474, 151.2631));
//
// var input = document.getElementById('searchTextField');
//
// var searchBox = new google.maps.places.SearchBox(input, {
//   bounds: defaultBounds
// });
