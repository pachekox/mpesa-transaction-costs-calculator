import React, { Component } from "react";
import "./style.css";

class Operation extends Component {
    state = {
        sendchecked: false
    }

    oncheck = () => {
        this.setState({
            sendchecked: true
        })
        // let sendChecked = true;
        alert(this.state.sendchecked);
        console.log(this.state.sendchecked);
    }

    render() {
        return (
            <div className="flex flex-row space-x-5 my-5 mx-auto w-3/4 ">
                <input
                    className="inline pt-1 "
                    type="radio"
                    name="operation"
                    id="send"
                    onClick={this.oncheck}
                    checked = {this.state.sendchecked}
                    
                />
                <h1 className="inline  text-4xl">Send</h1>
                <input type="radio" name="operation" />
                <h1 className="inline  text-4xl" id="received">
                    Withdraw
                </h1>
            </div>
        );
    }
}
export default Operation;
