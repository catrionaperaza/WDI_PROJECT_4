import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import Auth from '../../lib/Auth';

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
        <div className="row">
          {/* <div className="page-banner col-md-12">
            { Auth.isAuthenticated() && <Link to="/dinners/new" className="main-button">
              Create Dinner Event
            </Link>} */}
          {/* </div> */}
          {this.state.dinners.map(dinner => {
            return(
              <div key={dinner.id} className="image-tile col-md-4 col-sm-6 col-xs-12">
                <Link to={`/dinners/${dinner.id}`}>
                  <img src={dinner.image} className="img-responsive" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }


}





export default DinnersIndex;
