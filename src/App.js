import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
  } 
  from 'react-router-dom';
import './App.css';
import Gallery from './components/gallery/Gallery';
import Details from './components/details/Details';
import NotFound from './components/NotFound/not-Found';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Switch>
          <Route path='/not-Found' component={NotFound} />
            <Route exact path='/' component={Gallery} />
            <Route path='/:showId' component={Details} />
          </Switch>
        </div>
      </Router>
    );
  }
}
