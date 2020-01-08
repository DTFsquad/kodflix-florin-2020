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
          <img src={Avatar} alt='' />
        </div>
        <div className='cover-row-item-img'>
        <img src={CaptainAmerica} alt='' />
        </div>
        <div className='cover-row-item-img'>
        <img src={Endgame} alt='' />
        </div>
      </div>
      <div className='cover-row-img'>
        <div className='cover-row-item-img'>
        <img src={FastandFurios} alt='' />
        </div>
        <div className='cover-row-item-img'>
        <img src={JackRyan} alt='' />
        </div>
        <div className='cover-row-item-img'>
        <img src={Kingsman} alt='' />
        </div>
      </div>
    </div>
  );
}

export default App;
