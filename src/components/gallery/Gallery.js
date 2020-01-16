import React from 'react';
import './Gallery.css';
import Cover from './cover/Cover';
import Avatar from './cover/images/Avatar.jpeg';
import CaptainAmerica from './cover/images/CaptainAmerica.jpeg';
import Endgame from './cover/images/Endgame.jpeg';
import FastandFurios from './cover/images/FastandFurios.jpeg';
import JackRyan from './cover/images/JackRyan.jpeg';
import Kingsman from './cover/images/Kingsman.jpeg';

export default class App extends React.Component {
    render() {
      return (
       <div className='App'>
        <div className='cover-row-img'>
          <Cover 
            img={Avatar} 
            title='Avatar'
            id='avatar' 
            alt='Cover of Avatar movie' 
          />
          <Cover 
            img={CaptainAmerica} 
            title='Captain America'
            id='captainamerica' 
            alt='Cover of Captain America movie' 
          />
          <Cover 
            img={Endgame} 
            title='Endgame'
            id='endgame' 
            alt='Cover of Endgame movie' 
          />
        </div>
        <div className='cover-row-img'>
          <Cover 
            img={FastandFurios} 
            title='Fast and Furios'
            id='fastandfurios' 
            alt='Cover of Fast and Furios movie' 
          />
          <Cover 
            img={JackRyan} 
            title='Jack Ryan'
            id='jackryan' 
            alt='Cover of Jack Ryan movie' 
          />
          <Cover 
            img={Kingsman} 
            title='Kingsman'
            id='kingsman' 
            alt='Cover of Kingsman movie' 
          />
        </div>
      </div>
    );
  }
  }