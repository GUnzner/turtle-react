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
import ImageSlider from "../components/imageslide";
import { useTranslation } from "react-i18next";


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

     const { t } = useTranslation();

    return (
    <><h1 className="headline">{t('Home')}</h1>
    <p>{t('Welcome')}</p>
    {/* <img alt="turtle" src={turtle}></img> */}
    <div className="mb-5" style={containerStyles}>
    <ImageSlider slides={slides} />
    </div></>
    )
}