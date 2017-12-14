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
      avail_places: '',
      description: '',
      guests: []
    },
    removeSelected: true,
    guests: [],
    value: []
  };

  componentDidMount() {
    Axios
      .get('/api/users', {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(res => {
        const guests = res.data.map(guest => {
          return { label: guest.name, value: guest.id };
        });
        this.setState({guests});
      })
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

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

    const dinnerGuests = this.state.value.map(guest => guest.value);
    console.log(dinnerGuests);
    const dinner = Object.assign({}, this.state.dinner, { attendees: dinnerGuests });
    this.setState({ dinner }, () => {

      Axios
        .post('/api/dinners', this.state.dinner, {
          headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
        })
        .then(() => this.props.history.push('/'))
        .catch(err => console.log(err));
    });
  }

  handleSelectChange = (value) => {
    this.setState({ value });
  }

  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="page-banner col-md-12">
            <h1>Add your Dinner</h1>
            <DinnersForm
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              handleLocationChange={this.handleLocationChange}
              dinner={this.state.dinner}
              handleSelectChange={this.handleSelectChange}
              {...this.state}
            />
          </div>
        </div>
      </div>
    );
  }



}

export default DinnersNew;
