import React from "react";
import '../style.css';
import mpesa from './mpesa.png';

class Title extends React.Component{
    render(){
        return (<div className='flex flex-col  mx-auto my-10  w-full '>
            <img src={mpesa} alt="Mpesa Logo" title="mpesa logo" className="mx-auto w-2/3 "></img>
            <h1 className="text-black  text-6xl mx-auto w-3/4">Transaction Calculator.</h1>
            <p className="text-gray-500 text-4xl mx-auto w-3/4">Query transaction charges on Mpesa</p>
        </div>)
    }
}

export default Title;