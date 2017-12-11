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
      // place_id: '',
      avail_places: '',
      description: ''
      // createdBy: user
    }
  };

  componentDidMount() {
    Axios
      .get(`/api/dinners/${this.props.match.params.id}`)
      .then(res => this.setState({ dinner: res.data }))
      .catch(err => console.log(err));
  }

  handleChange = ({ target: { name, value } }) => {
    const dinner = Object.assign({}, this.state.dinner, { [name]: value });
    this.setState({ dinner });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .put(`/api/dinners/${this.props.match.params.id}`, this.state.dinner, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(res=> this.props.history.push(`/dinners/${res.data.id}`))
      .catch(err=> console.log(err));
  }

  render() {
    return (
      <DinnersForm
        history={this.props.history}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        dinner={this.state.dinner}
      />
    );
  }

}

export default DinnersEdit;
