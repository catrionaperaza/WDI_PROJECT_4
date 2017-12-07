import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import GoogleMap from '../external-api/GoogleMap';

class DinnersIndex extends React.Component {

  state = {
    dinners: []
  }


  componentDidMount() {
    Axios
      .get('/api/dinners')
      .then(res => this.setState({ dinners: res.data }))
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div>
        <GoogleMap center={ this.state.center } />
      </div>
    );
  }


}

export default DinnersIndex;
