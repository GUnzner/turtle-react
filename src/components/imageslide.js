import React, {useEffect, useState, useRef, useCallback } from "react";

const ImageSlider = ({ slides }) => {
    const timerRef = useRef(null)
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        height: "100%",
        position: "relative"
    }
    
    const slideStyles = {
      width: "50vw",
      height: "50vw",
      borderRadius: "10px",
      backgroundPosition: "center",
      backgroundSize: "cover",
      margin:"auto",
      backgroundImage: `url(${slides[currentIndex]})`
    }

    const leftArrowStyles = {
      position: "absolute",
      top: "50%",
      transform: "translate(0, -50%)",
      left: "32px",
      fontSize: "45px",
      color: "black",
      zIndex: 1,
      cursor: "pointer"
    }

    const rightArrowStyles = {
      position: "absolute",
      top: "50%",
      transform: "translate(0, -50%)",
      right: "32px",
      fontSize: "45px",
      color: "black",
      zIndex: 1,
      cursor: "pointer"
    }

    const goToPrevious = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1;
      setCurrentIndex(newIndex)
    }

    const goToNext = useCallback(() => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex)
    }, [currentIndex, slides])

    useEffect(() => {
      if (timerRef.current){
        clearTimeout(timerRef.current)
      }
      timerRef.current = setTimeout(() => {
        goToNext()
      }, 3000)

      return () => clearTimeout(timerRef.current)
    }, [goToNext])
  
    return (
      <div style={sliderStyles}>
        <div style={leftArrowStyles} onClick={goToPrevious}>❮</div>
        <div style={rightArrowStyles} onClick={goToNext}>❯</div>
        <div style={slideStyles}></div>
      </div>
    );
  }

  export default ImageSlider;