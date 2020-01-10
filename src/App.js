import React, { Component } from 'react';
import './App.css';
import Cover from './cover/Cover';
import Avatar from './cover/images/Avatar.jpeg';
import CaptainAmerica from './cover/images/CaptainAmerica.jpeg';
import Endgame from './cover/images/Endgame.jpeg';
import FastandFurios from './cover/images/FastandFurios.jpeg';
import JackRyan from './cover/images/JackRyan.jpeg';
import Kingsman from './cover/images/Kingsman.jpeg';

class App extends Component {
  render() {
    return (
     <div className='App'>
      <div className='cover-row-img'>
        <Cover 
          img={Avatar} 
          title='Avatar' 
          alt='Cover of Avatar movie' 
        />
        <Cover 
          img={CaptainAmerica} 
          title='Captain America' 
          alt='Cover of Captain America movie' 
        />
        <Cover 
          img={Endgame} 
          title='Endgame' 
          alt='Cover of Endgame movie' 
        />
      </div>
      <div className='cover-row-img'>
        <Cover 
          img={FastandFurios} 
          title='Fast and Furios' 
          alt='Cover of Fast and Furios movie' 
        />
        <Cover 
          img={JackRyan} 
          title='Jack Ryan' 
          alt='Cover of Jack Ryan movie' 
        />
        <Cover 
          img={Kingsman} 
          title='Kingsman' 
          alt='Cover of Kingsman movie' 
        />
      </div>
    </div>
  );
}
}

export default App;
