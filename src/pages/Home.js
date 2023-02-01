import React from 'react';
import baby from "../images/baby.jpg";
import babyTurtle from "../images/baby-turtle.jpg";
import babyTurtle2 from "../images/baby-turtles-4.jpg";
import hals from "../images/hals.jpg";
import friends from "../images/friends.jpg";
import kiss from "../images/kiss.jpg";
import meer from "../images/meer.jpg";
import kassio from "../images/Schildi.jpeg";
import sonnen from "../images/sonnen.jpg";
import tortoise from "../images/tortoise.jpg";
import wasser from "../images/wasser.jpg";
import ImageSlider from "../components/imageslide"


export default function Home(){
     const slides = [
        baby, babyTurtle, babyTurtle2, hals, friends, kiss, meer, kassio, 
            sonnen, tortoise, wasser
     ]

     const containerStyles = {
        width: "500 px",
        height: "280 px",
        margin: "0 auto"
     }

    return (
    <><h1 className="headline">Home</h1>
    <p>Welcome to Save the Turtles!</p>
    {/* <img alt="turtle" src={turtle}></img> */}
    <div style={containerStyles}>
    <ImageSlider slides={slides}/>
    </div></>
    )
}