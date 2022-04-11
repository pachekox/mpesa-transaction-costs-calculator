import React, { Component } from "react";
import './style.css';

class WhichProvider extends Component{
    render(){
        return(
            <div className="mx-2">
                <input type='text' list="providers" placeholder="Sending to which provider" className=" rounded border border-2 h-8 w-full"/>

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