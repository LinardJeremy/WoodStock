import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

function Info(props){
    return (
        <div class={props.divClass} id={props.id}>
        <img class={props.classImg} id={props.idImg} src={props.src} alt={props.alt}/>
            <div class="sousdivFirst">
                <p>{props.text}</p>
                <button class="button1" type="button" action={props.action}>{props.buttonName}</button>
            </div>
        </div>

    )
}
export default Info;