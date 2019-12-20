import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import Navigation from './components/navigation';
import Jumbotron from './components/jumbotron';
function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <Jumbotron />
        <i className="fa fa-paw"></i>
        <FontAwesomeIcon icon={faPaw} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="container">
      </div>
    </div>
  );
}
export default App;
