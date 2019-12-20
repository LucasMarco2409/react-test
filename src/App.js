import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import Navigation from './components/navigation';
import Jumbotron from './components/jumbotron';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <header className="App-header">
        <div className="container">
          <div className="row">
        <Jumbotron/>
        <Jumbotron/>
        <Jumbotron/>
        <i className="fa fa-paw"></i>
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
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
