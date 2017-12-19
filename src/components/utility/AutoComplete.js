/* global google */
import React from 'react';

class AutoComplete extends React.Component {

  componentDidMount() {
    console.log(google.maps.places, 'google.maps.places');
    this.autocomplete = new google.maps.places.Autocomplete(this.input, { types: ['establishment']});

    this.autocomplete.addListener('place_changed', () => {
      console.log(this.autocomplete.getPlace());
      const place = this.autocomplete.getPlace();
      const { username, formatted_address } = place;
      const location = place.geometry.location.toJSON();


      this.props.handleChange(username, formatted_address, location);
    });
  }

  render() {
    return(
      <input ref={element => this.input = element} />
    );
  }
}


export default AutoComplete;
