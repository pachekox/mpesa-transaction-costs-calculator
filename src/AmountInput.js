import React, { Component } from 'react';
import './style.css';

class Amount extends Component{
    render(){
        return (
        <div className='mx-2 flex flex-col my-5  mx-auto w-3/4' >
            <input type="text" placeholder='Enter amount to transact' className='rounded  border border-2 border-green-500 w-full h-16 pl-2 text-4xl' />
        </div>
        );
    }
}

export default Amount;