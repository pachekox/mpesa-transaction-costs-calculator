import React, { Component } from 'react';
import './style.css';

class Button extends Component{
    render(){
        return(<div className='flex flex-col justify-center mx-2'>
            <button className='my-5 bg-green-500 h-10 p-2 text-white text-lg'>QUERY ALL CHARGES</button>
            </div>
        );
    }
}






export default Button;