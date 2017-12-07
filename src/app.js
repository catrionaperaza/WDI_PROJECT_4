import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import GoogleMap from './components/external-api/GoogleMap';

import './scss/style.scss';

import Routes from './components/utility/Routes';

class App extends React.Component {

  state = {
    center: { lat: 52.3755, lng: -2.317 }
  }

  render() {
    return (
      <Router>
        <div className="container">
          <GoogleMap center={ this.state.center } />
          <header>
            <h1>Ho Ho Hosts: Welcome</h1>
          </header>
          <main>
            <Routes />
          </main>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
