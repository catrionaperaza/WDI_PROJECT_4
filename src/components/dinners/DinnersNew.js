import React from 'react';
import Axios from 'axios';


import Auth from '../../lib/Auth';
import DinnersForm from './DinnersForm';

class DinnersNew extends React.Component {
  state = {
    dinner: {
      title: '',
      formatted_address: '',
      image: '',
      // place_id: '',
      avail_places: '',
      description: ''
      // createdBy: user
    }
  };

  handleChange = ({ target: { name, value }}) => {
    const dinner = Object.assign({}, this.state.dinner, { [name]: value });
    this.setState({ dinner });
  }

  handleLocationChange = (name, formatted_address, location) => {
    const dinner = Object.assign({}, this.state.dinner, { name, formatted_address, location });
    this.setState({ dinner });
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
        handleLocationChange={this.handleLocationChange}
        dinner={this.state.dinner}
      />
    );
  }



}

export default DinnersNew;
