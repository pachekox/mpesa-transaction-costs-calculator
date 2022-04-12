import React, { Component } from "react";
import "./style.css";

class Results extends Component {
  render() {
    return (
      <div className="flex flex-col  mx-auto w-3/4 my-10 border border-green-500 rounded p-2 bg-green-500 shadow shadow-2xl shadow-black">
        <h1 className="text-black text-5xl">
          To send/withdraw {}this amount from this provider, you need this
          amount as the transaction cost
        </h1>
      </div>
    );
  }
}

export default Results;
