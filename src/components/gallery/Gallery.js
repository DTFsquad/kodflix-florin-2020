import React from 'react';
import './Gallery.css';
import Cover from './cover/Cover';
import getGallery from './get-gallery';


export default class App extends React.Component {
    render() {
      return (
        <div className='gallery'>
          {getGallery().map(cover => {
            return(
              <Cover 
                image={cover.image}
                key={cover.id}
                id={cover.id}
                title={cover.id}
              />
            );
          })}
        </div>
    );
  }
}