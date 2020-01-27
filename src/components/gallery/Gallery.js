import React from 'react';
import './Gallery.css';
import Cover from './cover/Cover';
import getShows from '../shows';


export default class App extends React.Component {
    render() {
      return (
        <div className='gallery'>
          {getShows().map(show => {
            return(
              <Cover 
                image={show.image}
                key={show.id}
                id={show.id}
                title={show.id}
              />
            );
          })}
        </div>
    );
  }
}