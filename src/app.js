import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './components/utility/Routes';
import Navbar from './components/utility/Navbar';
import SearchBox from './components/utility/SearchBox';

import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="container">
          <SearchBox />
          <header>
            <h1></h1>
          </header>
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
