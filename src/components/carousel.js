import React from "react";
import ImageSlide from "./imageslide";
import Arrow from "./arrow";
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
import wasser from "../images/wasser.jpg"

const imgUrls = [baby, babyTurtle, babyTurtle2, hals, friends, kiss, meer, kassio, 
sonnen, tortoise, wasser]

class Carousel extends React.Component {
    constructor (props) {
        super(props);
    
        this.state = {
          currentImageIndex: 0
        };
        
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
      }

      previousSlide () {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
    
        this.setState({
          currentImageIndex: index
        });
      }
    
      nextSlide () {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
    
        this.setState({
          currentImageIndex: index
        });
      }

    render () {
      return (
        <><div className="carousel">
                    <Arrow
          direction="left"
          clickFunction={ this.previousSlide }
          glyph="&#9664;" />
        
        <ImageSlide url={imgUrls[this.state.currentImageIndex] } />
        
        <Arrow
          direction="right"
          clickFunction={ this.nextSlide }
          glyph="&#9654;" />
      </div>
      </>
      );
    }
  }
  
export default Carousel;
 