import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './scss/debug.scss';
import 'bootstrap-css-only';
import { Grid, Row, Col } from 'react-bootstrap';

import Routes from './components/utility/Routes';
import Navbar from './components/utility/Navbar';


import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="container">
          <Grid>
            <Row className="show-grid"></Row>

            <main>
              <Routes />
              <Navbar />
            </main>
          </Grid>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
