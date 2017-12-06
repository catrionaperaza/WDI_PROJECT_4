import React from 'react';
import Axios from 'axios';
// import { Link } from 'react-router-dom';

// import Auth from '../../lib/Auth';

class DinnersShow extends React.Component {
  state = {
    dinner: {}
  }

  componentWillMount() {
    Axios
      .get(`/api/dinners/${this.props.match.params.id}`)
      .then(res => this.setState({ dinner: res.data}))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="row">
        <div className="image-tile col-md-6">
          <img src={this.state.dinner.image} className="img-responsive" />
        </div>
        <div className="col-md-6">
          <h2>Event: {this.state.dinner.name}</h2>
          <h3>Number of places: {this.state.dinner.avail_places}</h3>
          <p>Description: {this.state.dinner.description}</p>
          <h3>Host: {this.state.dinner.createdBy}TBC</h3>
        </div>
      </div>
    );
  }
}


export default DinnersShow;
