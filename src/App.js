import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import Navigation from './components/navigation';
import Jumbotron from './components/jumbotron';
import Card from './components/card';
import Toasts from './components/toasts';
import FlushList from './components/flushlist';
function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
      <div className="container">
        <div className="row">
        <Jumbotron />
        <Jumbotron />
        <Jumbotron />
        </div>
        <div className="row">
          <div className="col">
          <Card/>
          </div>
          <div className="col">
          <Card/>
          </div>
          <div className="col">
          <Card/>
          </div>
        </div>
        </div>

        <div className="row">
          <div className="col">
          <Toasts/>
        </div>
        <div className="col">
        <FlushList/>
        </div>
        </div>
      </header>
    </div>
  );
}
export default App;
