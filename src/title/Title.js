import React from "react";
import '../style.css';
import mpesa from './mpesa.png';

class Title extends React.Component{
    render(){
        return (<div className='flex flex-col justify-start md:align-center md:container md:ml-auto mt-5 mx-2'>
            <img src={mpesa} alt="Mpesa Logo" title="mpesa logo" className="mx-auto w-1/2"></img>
            <h1 className="text-black text-xl mt-2">Mpesa Transaction Calculator.</h1>
            <p className="text-gray-500 text-sm md:text-lg">Query transaction charges on Mpesa</p>
        </div>)
    }
}

export default Title;