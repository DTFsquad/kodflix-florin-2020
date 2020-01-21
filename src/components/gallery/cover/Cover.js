import React from 'react';
import { Link } from 'react-router-dom';
import './Cover.css';

export default class Cover extends React.Component {
    render() {
        return (
            <Link to={`/${this.props.id}`} className='cover'>
                <img src={this.props.image} alt='' />
                <div className='cover-row-item-img-overlay'>
                    <h1>{this.props.title}</h1>
                 </div>
            </Link>
        )
    }
}