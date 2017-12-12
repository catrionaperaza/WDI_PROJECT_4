import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './components/utility/Routes';
import Navbar from './components/utility/Navbar';
import botNavBar from './components/utility/botNavBar';
import Auth from './lib/Auth';

import './scss/style.scss';

class App extends React.Component {

  state = {
    user: ''
  }

  render() {
    return (
      <Router>
        <div className="container">
          <header>
            <h1>Ho Ho Hosts: Welcome</h1>
          </header>
          <main>
            <Routes />
            <Navbar />
            <botNavBar />
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
