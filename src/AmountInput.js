import React, { Component } from 'react';
import './style.css';

class Amount extends Component{
    render(){
        return (
        <div className='mx-2 flex flex-col my-5' >
            <input type="text" placeholder='Enter amount to transact' className='rounded  border border-green-500 w-full h-10 pl-2' />
        </div>
        );
    }
}

export default Amount;