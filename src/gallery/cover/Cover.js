import React from 'react';
import './Cover.css';

export default class Cover extends React.Component {
    render() {
        return (
            <div className='cover'>
                <img src={this.props.img} alt='' />
                <div className='cover-row-item-img-overlay'>
                    <h1>{this.props.title}</h1>
                 </div>
            </div>
        )
    }
}