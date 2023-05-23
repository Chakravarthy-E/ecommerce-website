import React, { useState } from "react";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import "./slider.scss"

const Slider = () => {
  const [currentSlide,setCurrentSlide] = useState(0)
  const data = [
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
   
  ];
  const prevSlide =() => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev -1)
  }
  const nextSlide =() => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)

  }
  return (
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
