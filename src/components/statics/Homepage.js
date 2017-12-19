import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

// import { Grid, Row, Col, Image } from 'react-bootstrap';

import Auth from '../../lib/Auth';

class Homepage extends React.Component {
  state = {
    user: {}
  }

  componentDidMount() {
    Auth.isAuthenticated() &&

    Axios
      .get(`/api/users/${Auth.getPayload().userId}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(res => this.setState({ user: res.data}))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="page-banner col-md-12">
            <h1>Welcome to Ho Ho Hosts! </h1>
            { !Auth.isAuthenticated() && <h2>Please login or register to start your search for a dinner to attend, or for a guest(s) to join your party!</h2>}
            { !Auth.isAuthenticated() &&  <h3><em>Ho Ho Hosts aims to match up Christmas dinners hosts with some extra space at their table this year with extra guests. Many of these guests are young professionals, living far from home and cannot make it back for Christmas, while we usually have families or groups of friends as hosts. It is a win/win situation as both gain from the interesting conversations and new friends made!</em></h3>}
            { !Auth.isAuthenticated() && <img src="https://www.englishandculture.com/hs-fs/hub/98462/file-984264747-jpg/images/how_to_talk_about_your_family_in_english.jpg?t=1433880746000" className="image-hp" />}
            { !Auth.isAuthenticated() && <img src="http://xmasblor.com/wp-content/uploads/2015/10/christmasweddingfood-14462908568gnk4.jpg" className="image-hp" />}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            { Auth.isAuthenticated() && <h2 className="clickIcons">Click on icons to search dinners or guests</h2>}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            { Auth.isAuthenticated() && <Link to={'/dinners'}><img src="./assets/dinnersicon.png" className="img-responsive icons" /></Link>}
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            { Auth.isAuthenticated() && <Link to={'/users'}><img src="./assets/usersicon.png" className="img-responsive icons" /></Link>}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            { this.state.user.dinnersCreated && this.state.user.dinnersCreated.map(dinner => {
              return(
                <div key={dinner.id} >
                  { Auth.isAuthenticated() && <h2>{this.state.user.username}, you are hosting: {dinner.title} </h2>}
                  { Auth.isAuthenticated() && <Link to={`/dinners/${dinner.id}`}><img src={dinner.image} className="image-hp" /></Link>}
                </div>
              );
            })
            }
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            { this.state.user.dinnersAttending && this.state.user.dinnersAttending.map(dinner => {
              return(
                <div key={dinner.id} >
                  { Auth.isAuthenticated() && <h2>{this.state.user.username}, you are attending: {dinner.title} </h2>}
                  { Auth.isAuthenticated() && <Link to={`/dinners/${dinner.id}`}><img src={dinner.image}  className="image-hp" /></Link>}
                </div>
              );
            })}
          </div>
        </div>
      </div>

    );
  }
}

export default Homepage;
