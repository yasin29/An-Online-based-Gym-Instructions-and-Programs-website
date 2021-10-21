import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Results.css'

const Results = () => {
    return (
        <div className="my-5">
            <h1>REAL GUYS. REAL RESULTS</h1>
            <p className='mt-3'>FROM FACTORY WORKERS TO COMPUTER PROGRAMMERS, OUR GUYS HAVE CHALLENGED THEMSELVES TO CHANGE THEMSELVES...</p>
            <Container>
                <Row>
                    <Col xs={12} md={12} lg={6}>
                        <h3>DAN PLATT – 50 YEAR OLD VEGETARIAN GETS REAL RESULTS!</h3>
                        <h5>DAN PLATT: 50 WOODLAND HILLS, CALIFORNIA</h5>
                        <p>I watched just about every YouTube video that Jeff uploaded to his Xclusive GYM channel and became convinced that his philosophy and exercise method were second to none, intense and challenging (but not impossible), and exactly the right prescription for me to lean out and tone up. As a full time special effects artist (with credits on Tron Legacy, X-Men First Class and known for bringing the late Tupac Shakur back to life as a "hologram"), the Xclusive Gym program was the perfect fit for my busy schedule.</p>
                    </Col>
                    <Col xs={6} md={6} lg={3}>
                        <img className="w-75" src="https://i.ibb.co/7Gqzm5x/Dan-Platt-Before.jpg" alt="" />
                    </Col>
                    <Col xs={6} md={6} lg={3}>
                        <img className="w-75" src="https://i.ibb.co/TBsH6x8/Dan-Platt-After.jpg" alt="" />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col xs={6} md={6} lg={3}>
                        <img className="w-75" src="https://i.ibb.co/gRDVb3q/Simon-Slingerland-Before.png" alt="" />
                    </Col>
                    <Col xs={6} md={6} lg={3}>
                        <img className="w-75" src="https://i.ibb.co/fdLS56j/Simon-Slingerland-After.png" alt="" />
                    </Col>
                    <Col xs={12} md={12} lg={6}>
                        <h3>SIMON SLINGERLAND</h3>
                        <h5>SIMON SLINGERLAND: 24 LEUSDEN, NETHERLANDS</h5>
                        <p>"Since the beginning of the year, I have completed a few of the Xclusive Gym programs starting with the XERO program and I am now onto AX-1 with the T.N.T. plug-ins. If I hadn't stumbled upon your videos on YouTube, I would likely still be on the couch! I just want to say that not only do I love the programs (the workouts are amazing!) but I also want to thank you for helping to change my life.</p>
                    </Col>

                </Row>
                <hr />
                <Row>
                    <Col xs={12} md={12} lg={6}>
                        <h3>JACK ELTMAN – FIREFIGHTER CHANGES HIS LIFE!</h3>
                        <h5>JACK ELTMAN: 45 PHILADELPHIA, PENNSYLVANIA</h5>
                        <p>If it wasn't for his program I would still be putting the last bit of nails in my coffin so to speak. Paying for NXT is the least I could do to somehow thank Jeff for everything he has done, and is still doing, for me and my family.I've been sharing my story with every person I bump into and continue to advocate for his program.</p>
                    </Col>
                    <Col xs={6} md={6} lg={3}>
                        <img className="w-75" src="https://i.ibb.co/SdjtZyb/Jack-Eltman-After.jpg" alt="" />
                    </Col>
                    <Col xs={6} md={6} lg={3}>
                        <img className="w-75" src="https://i.ibb.co/kqcJD5c/Jack-Eltman-Before.jpg" alt="" />
                    </Col>
                </Row>
            </Container>
            <div className="divider"><span></span><span>Program Selector</span><span></span></div>
            <Button variant="danger"><Link className="text-white" style={{ textDecoration: 'none' }} to="/programs"><h2>Choose Our Programs</h2></Link></Button>
        </div>
    );
};

export default Results;