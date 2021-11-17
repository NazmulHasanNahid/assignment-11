import React from "react";
import "./PlaceInformation.css";
import Fade from 'react-reveal/Fade';


const PlaceInformation = (props) => {
    const { name, description, price, img } = props?.booking;
    return (
        <div className="place-order-info rounded mb-5 shadow-lg p-3">
            <Fade bottom>
            <img style={{width:'100%'}} src={img} alt="" className="img-fluid" />
            <h1 className="text-info text-center">{name}</h1>
            <h5 className="text-info text-center">${price}</h5>
            <p className="text-info text-center">{description}</p>
            </Fade>
        </div>
    );
};

export default PlaceInformation;
