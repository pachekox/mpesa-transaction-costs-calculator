import React, { Component } from 'react';
import './style.css';

class Amount extends Component{
    render(){
        return (
        <div className='mx-2 flex flex-col my-5  mx-auto w-3/4' >
            <input type="text" placeholder='Enter amount to transact' className='rounded  border border-5 border-green-700 w-full h-20 pl-2 text-4xl' />
        </div>
        );
    }
}

export default Amount;