import React from 'react';
import logo from './logo.svg';
import './App.css';


function Navbar(props) {
  const elementNav = props.list ;
  const listItems = elementNav.map((element) =>
  <a href=""><li>{element}</li></a>
    
  );
  return (<ul className="menu">
    {listItems}
  </ul>);

  }


export default Navbar;
