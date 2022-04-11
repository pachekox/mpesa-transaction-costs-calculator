// import logo from './logo.svg';
import React from 'react';
// import './App.css';
import Title from './title/Title';
import Footer from './Footer';
import Button from './Button';
import Operation from './Operation';
import Amount from './AmountInput';
import WhichProvider from './WhichProvider';
import Results  from './Results';
import OrText from './OrText';


class Header extends React.Component{
  render(){
    return (<><Title />
    <Operation/>
    <WhichProvider/>
    <Amount/>
    <Results/>
    <OrText/>
    <Button/>
    <Footer /></>);
  }
}


export default Header;
