import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import getShows from '../shows';



export default class Details extends React.Component {
    constructor() {
        super();
        this.state = { show: {} };
    }

    componentDidMount() {
        let show = getShows()
            .find(show => show.id ===
                this.props.match.params.showId);
            this.setState({ show });
    }
    render() {
        return (
            (this.state.show === undefined) ?
                <Redirect to='/not-Found' /> :
                <div>
                    <h1>{this.state.show.title}</h1>
                    <Link to='/'>Home</Link>
                 </div>
        );
    }
    

}