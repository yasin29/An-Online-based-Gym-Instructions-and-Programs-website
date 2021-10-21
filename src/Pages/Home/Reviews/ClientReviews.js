import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import CustomToggle from './CustomToggle';
import './ClientReviews.css'
const ClientReviews = () => {
    return (
        <div>
            <h2 className="bg-success d-inline p-1 rounded">Client Reviews</h2>
            <p className="m-2 text-primary">Click on Client name for Details</p>
            <Accordion className="container flex-container my-3" defaultActiveKey="0">
                <Card className="contentIn" >
                    <Card.Header>
                        <CustomToggle eventKey="1">RON YARMAN</CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body> <p > <b>I did the 6 week challenge. I lost 20.6 lbs and 5.4% body fat. It pushed me to stay motivated everyday and keep myself accountable. Everyone was very supportive. I loved the constant variety of workouts provided, as well as weekly mindset coaching.</b></p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className="contentIn" >
                    <Card.Header>
                        <CustomToggle eventKey="2">MARIA OVALLES</CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body> <p ><b>I lost 22.6lbs doing the 6 week challenge! Great coaches to work with! The have everything detailed out for you from workouts to meal prepping. Highly recommend!</b></p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className="contentIn" >
                    <Card.Header>
                        <CustomToggle eventKey="3">CALI WEINGAST</CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body> <p><b>I highly recommend this workout program. I lost over 5% body fat in 6 weeks. I feel more energetic. I fit into my prepregnancy jeans after completing this challenge. Great staff. Great workouts.</b></p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className="contentIn" >
                    <Card.Header>
                        <CustomToggle eventKey="4">KONGXEE XIONG</CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body> <p ><b>The program is great! I lost 22.6 lbs in 6 weeks. Would recommend to people who would like to lose weight but do not know where to start</b></p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className="contentIn" >
                    <Card.Header>
                        <CustomToggle eventKey="5">RENE CABALLERO</CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                        <Card.Body> <p ><b>Great experience. Life changing! I lost 23 pounds in 60 days, from 212 to 189. And even taught me how to follow up with the healthier lifestyle.</b></p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
};

export default ClientReviews;