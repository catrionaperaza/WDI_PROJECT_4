/* global google */
import React from 'react';

class Radius extends React.Component {
  componentDidMount() {
    this.userRadius = new google.maps.Circle.radius(this.input);

    this.userRadius.addListener('radius_changed', () => {
      const newRadius = this.userRadius.value(this.input);
    });
    this.props.handleUserRadius(newRadius);
  }

  render(){
    return(
      <input ref={newRadius => this.input = newRadius} />

    );
  }
}






export default Radius;
