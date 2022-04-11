import React, { Component } from "react";
import './style.css';

class Footer extends Component{
    render(){
        return(<footer className="flex flex-col mx-2 mb-0 text-gray-500 md:container md:w-1/2"><p>This site is not affiliated by any means to
            Safaricom PLC. The charges are subject to
            change and may not reflect here soon
            upon change.</p><p>This site is maintained using React JS
                and Tailwind CSS.To contribute click <a href="https://github.com/pacheko123" className="underline decoration-green-500">Contribute here</a>.</p></footer>);
    }
}

export default Footer;