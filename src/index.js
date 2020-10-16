import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './App';
import Info from './Info';
import * as serviceWorker from './serviceWorker';
// Header
const listes = ['Wood','About','Furniture','Shop'];
const elementnav = <Navbar list={listes} title="Wood" />
ReactDOM.render(
  elementnav,
  document.getElementById('root')
);
// Header

// div info
const text = "Lorem ipsum dolor sit amet. Qui rerum velit non corporis esse aut nobis veniam ab similique adipisci non necessitatibus nemo saepe! Ea officiis accusamus qui ipsa dolor sit inventore voluptas. Et assumenda animi ad molestiae debitis in fugit quibusdam. Sed molestias beatae qui iusto cumque et praesentium soluta id animi sed quia maiores et sunt obcaecati";
const elementInfo = <Info id="divInfo" 
divClass="firstdiv"
src="./img/table.jpg"
 alt='table'
 classImg = "img1"
 text={text} 
 action = ""
 buttonName = "Button1" />
 ReactDOM.render(
   elementInfo,
   document.getElementById('information')
 )
// div info

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
