import React from "react";
import "./Banner.css";
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';



const Banner = () => {
    return (
        <div className="banner-img">
            <div className="banner-text">
            <Jump>   <h2 ><span className="text-white display-1 fw-bold">NH</span>  <span className="text-warning">Travel</span></h2>   </Jump>
            <Fade right> <p>Travel Whole World With the Cheap Prices and Best Guidens</p> </Fade>
            <smal className="text-white"> <Fade left>  we commited to you for that we can make you happier with our services  </Fade></smal>
            </div>
        </div>
    );
};

export default Banner;
