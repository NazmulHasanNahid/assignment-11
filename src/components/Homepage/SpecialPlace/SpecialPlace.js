import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./SpecialPlace.css";
import img from '../../../img/newwork.jpg'
import Button from "@restart/ui/esm/Button";


const SpecialPlace = () => {
    return (
        <div className="mt-5 ">
            <Container className="shadow-lg p-3  rounded">
                <Row className="d-flex align-items-center">
                    <Col md={6} xs={12}>
                       <img className="img-fluid" style={{width:'700px'  ,borderRadius:'10px'}} src={img} alt="" />
                    </Col>
                    <Col md={6} xs={12}>
                         <h2 className="text-info fw-bold">New Yourk City</h2>
                         <h4 className="text-danger fw-bold">This is Best Place You Have Ever seen!</h4>
                         <p className="text-success">New York, often called New York City to distinguish it from New York State, or NYC for short, is the most populous city in the United States. With a 2020 population of 8,804,190 distributed over 300.46 square miles (778.2 km2), New York City is also the most densely populated major city in the United States. Located at the southern tip of the State of New York, the city is the center of the New York metropolitan area, the largest metropolitan area in the world by urban area.[9] With over 20 million people in its metropolitan statistical area and approximately 23 Home to the headquarters of the United Nations, New York is an important center for international diplomacy,[11][12] and has sometimes been called the capital of the world</p> <br />
                         <Button target="blank"  href="https://en.wikipedia.org/wiki/New_York_City" className="btn btn-info text-white fw-bold">  Learn more About New Your City</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SpecialPlace;
