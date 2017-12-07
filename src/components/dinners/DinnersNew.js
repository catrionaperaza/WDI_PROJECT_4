import React from 'react';
import Axios from 'axios';


import Auth from '../../lib/Auth';
import DinnersForm from './DinnersForm';

class DinnersNew extends React.Component {
  state = {
    dinner: {
      title: '',
      address: '',
      image: '',
      // place_id: '',
      avail_places: 'Number',
      description: ''
      // createdBy: user
    }
  };

  handleChange = ({ target: { name, value }}) => {
    const dinner = Object.assign({}, this.state.food, { [name]: value });
    this.setState({ dinner });
  }

  handleLocationChange = (name, address, location, website) => {
    const bar = Object.assign({}, this.state.bar, { name, address, location, website });
    this.setState({ bar });
  }

  handleSubmit =(e) => {
    e.preventDefault();

    Axios
      .post('/api/dinners', this.state.dinner, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }


  render(){
    return(
      <DinnersForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        dinner={this.state.dinner}
      />
    );
  }



}

export default DinnersNew;
