import React from 'react';
import { Link } from 'react-router-dom';


export default function Details() {
    return (
        <div>
            <h1>Details</h1>
            <div>
                <h3>Hello, this will be the details page for each Movie & TV show :)</h3>
                <Link to='/'>Home</Link>
            </div>
        </div>
    );
}