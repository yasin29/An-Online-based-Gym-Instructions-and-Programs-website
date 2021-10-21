import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Programs.css'

const Program = ({ program }) => {
    const { id, name, img, description } = program;
    return (
        <div>
            <Col>
                <Card className="p-3" id="cardHover">
                    <Card.Img className="d-block w-75 img-fluid mx-auto" variant="top" src={img} />
                    <Card.Body style={{ height: '170px' }}>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Link to={`/entrol/${id}`}>
                            <button className="btn btn-warning">Learn More</button>
                        </Link>
                    </Card.Body>

                </Card>
            </Col>
        </div>
    );
};

export default Program;