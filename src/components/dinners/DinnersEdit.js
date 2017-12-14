import React from 'react';
import Axios from 'axios';

import Auth from '../../lib/Auth';
import DinnersForm from './DinnersForm';

class DinnersEdit extends React.Component {
  state = {
    dinner: {
      title: '',
      formatted_address: '',
      image: '',
      avail_places: '',
      description: '',
      attendees: []
    },
    removeSelected: true,
    attendees: [],
    value: []
  };

  componentDidMount() {
    Axios
      .get(`/api/dinners/${this.props.match.params.id}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(res => {
        this.setState({dinner: res.data});
      })
      .catch(err => this.setState({ errors: err.response.data.errors }));

    Axios
      .get('/api/users', {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(res => {
        const attendees = res.data.map(attendee => {
          return { label: attendee.name, value: attendee.id };
        });

        this.setState({attendees});
      });
  }

  handleChange = ({ target: { name, value } }) => {
    const dinner = Object.assign({}, this.state.dinner, { [name]: value });
    this.setState({ dinner });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const dinnerAttendees = this.state.value.map(attendee => attendee.value);
    console.log(dinnerAttendees);
    const dinner = Object.assign({}, this.state.dinner, { attendees: dinnerAttendees });
    this.setState({ dinner }, () => {

      Axios
        .put(`/api/dinners/${this.props.match.params.id}`, this.state.dinner, {
          headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
        })
        .then(res=> this.props.history.push(`/dinners/${res.data.id}`))
        .catch(err=> console.log(err));
    });
  }

  handleLocationChange = (name, formatted_address, location) => {
    const dinner = Object.assign({}, this.state.dinner, { name, formatted_address, location });
    this.setState({ dinner });
  }

  handleSelectChange = (value) => {
    this.setState({ value });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="page-banner col-md-12">
            <h1>Edit your Dinner</h1>
            <DinnersForm
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              dinner={this.state.dinner}
              handleSelectChange={this.handleSelectChange}
              handleLocationChange={this.handleLocationChange}
              {...this.state}
            />
          </div>
        </div>
      </div>
    );
  }

}

export default DinnersEdit;
