import React from 'react';

import './App.css';
import Avatar from './Avatar.jpeg';
import CaptainAmerica from './CaptainAmerica.jpeg';
import Endgame from './Endgame.jpeg';
import FastandFurios from './FastandFurios.jpeg';
import JackRyan from './JackRyan.jpeg';
import Kingsman from './Kingsman.jpeg';

function App() {
  return (
    <div className='App'>
      <div className='cover-row-img'>
        <div className='cover-row-item-img'>
          <h1>Avatar</h1>
        </div>
        <div className='cover-row-item-img'>
          <h1>Captain America</h1>
        </div>
        <div className='cover-row-item-img'>
          <h1>Endgame</h1>
        </div>
      </div>
      <div className='cover-row-img'>
        <div className='cover-row-item-img'>
          <h1>Fast and Furios</h1>
        </div>
        <div className='cover-row-item-img'>
          <h1>Jack Ryan</h1>
        </div>
        <div className='cover-row-item-img'>
          <h1>Kingsman</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
