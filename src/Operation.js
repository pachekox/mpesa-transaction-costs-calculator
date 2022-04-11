import React, { Component } from "react";
import './style.css';

class Operation extends Component{
    render(){
        return(
            <div className="flex flex-row space-x-5 my-5 mx-2">

                <input className="inline pt-1" type="radio" name="operation"/><h1 className="inline  " >Send</h1>
                <input type="radio" name="operation"/><h1 className="inline accent-green-500" >Withdraw</h1>
                

            </div>
        );
    }
}
export default Operation;