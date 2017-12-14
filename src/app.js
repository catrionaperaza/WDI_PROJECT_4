import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// import './scss/debug.scss';
import 'bootstrap-css-only';

import 'font-awesome/css/font-awesome.css';

import Routes from './components/utility/Routes';
import Navbar from './components/utility/Navbar';


import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="container">
          <header></header>
          <main>
            <Routes />
            <Navbar />
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
