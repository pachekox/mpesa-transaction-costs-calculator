import React from "react";
import '../style.css';
import mpesa from './mpesa.png';

class Title extends React.Component{
    render(){
        return (<div className='flex flex-col justify-start  md:justify-center md:container md:mx-auto mt-5 md:mt-1 mx-2 md:w-1/2'>
            <img src={mpesa} alt="Mpesa Logo" title="mpesa logo" className="mx-auto w-1/2 "></img>
            <h1 className="text-black text-xl mt-2 md:text-xxl">Mpesa Transaction Calculator.</h1>
            <p className="text-gray-500 text-sm md:text-lg">Query transaction charges on Mpesa</p>
        </div>)
    }
}

export default Title;