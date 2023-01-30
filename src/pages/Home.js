import React from 'react';
import turtle from "../images/Schildi.jpeg";


export default function Home(){
     //carousel
    return (
    <><h1 class="headline">Home</h1>
    <p>Welcome to Save the Turtles!</p>
    <img alt="turtle" src={turtle}></img></>
    )
}