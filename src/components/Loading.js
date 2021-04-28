import React, { Component } from 'react';
import loading from '../images/gif/loading-arrow.gif';

export default class Loading extends Component {
    render() {
        return (
            <div className='loading'>

            <img src={loading} alt="loading" />
                
            </div>
        )
    }
}
