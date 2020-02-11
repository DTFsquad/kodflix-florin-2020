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
        let show = this.state.show;
        return (
            (this.state.show === undefined) ?
                <Redirect to='/not-Found' /> :
                <div>
                    <div className='details'>
                        <h1>{show.title}</h1>
                        <div className='content-details'>
                            <h3 className='content-details-synopsis'>
                                {show.synopsis}
                            </h3>
                            <div className='content-details-cover'>
                                <img src={show.image} alt=''/>
                            </div>
                        </div>
                    </div>
                    <Link to='/'>Home</Link>
                 </div>
        );
    }
    

}