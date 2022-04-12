import React, { Component } from 'react';
import './style.css';

class Button extends Component{
    render(){
        return(<div className='flex flex-col justify-center mx-2 mx-auto w-3/4 '>
            <button className='my-5 bg-green-500 h-20 p-2 text-white shadow-xl text-4xl'>Query All Charges</button>
            </div>
        );
    }
}






export default Button;