import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

function Div(props){
return <div className="title">{props.title}</div>
}
function Navbar(props) {
  const elementNav = props.list ;
  let x = 1;
  const listItems = elementNav.map((element) => 
  <a href=""><li className={"element"+x++} >{element}</li></a>
  );
  
  return (
    <div className="backgroundImg">
        <ul className="menu">{listItems}</ul>
          <h1 className="titleSite" id="titleSite">{props.title}</h1>
  </div>
  );

  }



export default Navbar;


