import React from 'react';
import turtle from "../images/Schildi.JPG"

export default function About(){
    return (
    <><h1>About</h1>
    <p>This is a website about turtles and why they are awesome.
        Help save the turtles by buying cute items from our store or get in touch to find out more!</p>
    <img alt='Schildi' style={{height: '400px'}} src={turtle}></img></>
    )
}