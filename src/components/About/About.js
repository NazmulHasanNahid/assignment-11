import React from "react";
import { Col, Row } from "react-bootstrap";
import Rotate from 'react-reveal/Rotate';
import Slide from 'react-reveal/Slide';
import LightSpeed from 'react-reveal/LightSpeed';

import "./About.css";

const About = () => {
    return (
        <div className="about-banner">
           <Row>
               <Col md={6} xs={12} >
               <Rotate top left>  <img style={{width:"600px"}} className="img-fluid" src="https://i.ibb.co/XjpYK5D/about-us.png" alt="" /> </Rotate>
                </Col> 
               <Col  md={6} xs={12}>
               <Rotate top left>  <h2 className="mt-5 fw-bold text-warning">We are  NH travel Agency</h2></Rotate>
               <Rotate top left> <h3 className=" fw-bold text-warning">Our Vision is Travel The Whole World</h3>      <br /> 
                <h4 className="text-info">Travel Agent responsibilities include:</h4> <br /> </Rotate>
                <LightSpeed left>  <li className="text-danger">Planning and selling transportations, accommodations, insurance and other travel services</li> 
                <li className="text-danger" >Cooperating with clients to determine their needs and advising them appropriate destination,</li> <br />
                <li className="text-danger">Providing relevant information, brochures and publications (guides, local customs, maps, regulations, events etc) </li>
                <li className="text-danger">Providing relevant information, brochures and publications (guides, local customs, maps, regulations, events etc) </li>   </LightSpeed>
                <Slide left>  <button className="btn btn-info text-white fw-bold mt-5">Learn more</button>     </Slide>
               </Col>
           </Row>
        </div>
    );
};

export default About;
