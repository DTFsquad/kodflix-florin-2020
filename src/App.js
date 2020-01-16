import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route } 
  from 'react-router-dom';
import './App.css';
import Gallery from './components/gallery/Gallery';
import Details from './components/details/Details';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Route exact path='/' component={Gallery} />
          <Route path='/:showId' component={Details} />
        </div>
      </Router>
    );
  }
}
