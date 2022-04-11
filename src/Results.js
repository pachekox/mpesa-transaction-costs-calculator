import React, { Component } from 'react';
import './style.css';

class Results extends Component{
    render(){
        return(
            <div className='mx-2' >
                <h1 className='text-green-500 text-sm'>To send/withdraw {}this amount from this provider, you need this amount as the transaction cost</h1>
            </div>
        );
    }
}

export default Results;