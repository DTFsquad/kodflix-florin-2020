import React, { Component } from 'react';
import './App.css';
import Gallery from './gallery/Gallery';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Gallery />
      </div>
    );
  }
}
