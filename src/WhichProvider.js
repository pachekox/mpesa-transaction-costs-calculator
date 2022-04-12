import React, { Component } from "react";
import './style.css';

class WhichProvider extends Component{
    render(){
        return(
            <div className="flex flex-col mt-10 mx-auto w-3/4">
                <input type='text' list="providers" placeholder="Sending to which provider" className=" rounded border border-2 border-green-500 pl-2 text-4xl h-16 text-gray-300"/>

                <datalist id="providers">
                    <option value="Safaricom">Safaricom</option>
                    <option value="Airtel">Airtel</option>
                    <option value="Telkom">Telkom</option>
                </datalist>
            </div>
        );
    }
}

export default WhichProvider;