import React from 'react';
import { Accordion, Col,  Row } from 'react-bootstrap';
import tour from '../../../img/tour.png'
import Zoom from 'react-reveal/Zoom';


const Experience = () => {
    return (
        <div>
          
            <Row>
                <Col md={6} xs={12}>
                <Zoom left>   
                <img className="img-fluid mb-5" style={{width:'800px'}} src={tour} alt="" />
                </Zoom>
                </Col>
                <Col md={6} xs={12}>
                <Accordion  className="mt-5 w-75" defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What We Do</Accordion.Header>
                    <Accordion.Body>
                    We are NH Travel Agecncy We actualy work for Traveling Visa process and And provide Travel Guidline We also Have A travel Pakages you can Booked Our Service And Travle where You Want to Go  And we have lot more and more service we provide hotel service thats not now avaiable in our Website but we provide this is offline and we are provide travel service as well we have a 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What Our vision</Accordion.Header>
                    <Accordion.Body>
                     Our visoin is Travel the whole world and explore as many things as possible  and our main target is refresent all countries and explore special places in the world
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item  className="expand-lg" eventKey="1">
                    <Accordion.Header >Why You Choose Our Travel Agency</Accordion.Header>
                    <Accordion.Body>
                    First Of all We are Trusted and we have govt. permission For Give A travel Service and we are provide best  service in cheap price Range and we have our own travel agecncy that is NH Travel
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
                </Col>
            </Row>
           
        </div>
    );
};

export default Experience;