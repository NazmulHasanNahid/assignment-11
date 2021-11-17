import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import "./Contact.css";
import contact from '../../img/contact.png';
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';
import Button from "@restart/ui/esm/Button";

const Contact = () => {
    return (
        <div>
            <Row>
                <Col md={6} xs={12}>
                <Rotate bottom right> <img className="img-fluid" style={{width:'700px'}} src={contact} alt="" />  </Rotate>
                </Col>
                <Col md={6} xs={12}>
                <Fade top>   
                <Form className="mt-5 w-75">
                        <Form.Group className="mb-3 " >
                            <Form.Control className="p-3" type="text" placeholder="Enter Your First  Name" />  
                        </Form.Group> <br />
                        <Form.Group className="mb-3" >
                            <Form.Control className="p-3" type="text" placeholder="Enter Your Last  Name" />  
                        </Form.Group> <br />
                        <Form.Group className="mb-3" >
                            <Form.Control  className="p-3" type="text" placeholder="Enter Your Mobile Number" />  
                        </Form.Group> <br />
                        <Form.Group className="mb-3" >
                            <Form.Control className="p-3" type="email" placeholder="Enter email" />  
                        </Form.Group>
                        <Button className="btn btn-info text-white fw-bold" type="submit">
                            Submit
                        </Button>
                 </Form>
                 </Fade>
                </Col>
            </Row>
        </div>
    );
};

export default Contact;
