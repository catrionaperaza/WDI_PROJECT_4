/* global google */
import React from 'react';

class Slider extends React.Component {
  render(){
    return(
      <input type="range" onChange={this.props.updateRadius} min="1500" max="15000" value={this.props.value} />
    );
  }
}


export default Slider;
