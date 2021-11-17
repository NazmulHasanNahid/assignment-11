import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Fade from 'react-reveal/Fade';

import Zoom from 'react-reveal/Zoom';

import "./Destinations.css";

const Destinations = () => {
    const { setIsLoading } = useAuth();
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        const uri = "https://calm-basin-18890.herokuapp.com/allbooking";
        fetch(uri)
            .then((res) => res.json())
            .then((data) => {
                setIsLoading(false);
                setPlaces(data);
            });
    }, [setIsLoading]);

    return (
        <div className="mt-5 mb-5">
            <Fade bottom> 
            <h4 className="text-center text-info">Best Trip We Can Provide</h4>
            <h1 className="text-center">
            <span className="text-warning fw-bold ">Choose Your Perfect Trip</span></h1>
            </Fade>
            <Container>
           
                <Row xs={1} md={2} lg={3} className="g-4 ">
                    {places.map((place) => (
                        <Col key={place._id}>
                             <Zoom left>
                            <Card className="card-style">
                                <Card.Img
                                    variant="top"
                                    src={place.img}
                                    className="card-img"
                                />
                                <Card.Body className="bg-dark  card-body ">
                                    <Card.Title className="card-title text-white fw-bold">
                                        {place.name}
                                    </Card.Title>
                                    <Card.Text className="card-para text-white">
                                        {place.description.slice(0, 100)}...
                                    </Card.Text>
                                    <Card.Text className="card-para text-white">
                                        ${place.price}
                                    </Card.Text>
                                    <Link to={`/placeorder/${place._id}`}>
                                        <button className="btn btn-info text-white fw-bold">
                                           Booking
                                        </button>
                                    </Link>
                                </Card.Body>
                            </Card>
                            </Zoom>
                        </Col>
                    ))}
                </Row>
               
                
            </Container>
            <Fade right>  <h4 className="text-info text-center mt-5">About Something Our Services</h4>
               <h1 className="text-warning text-center">You Should Know About Our Services </h1>  </Fade>
        </div>
    );
};

export default Destinations;
