import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Supplement.css'

const Supplement = ({ supplement }) => {
    const { p_id, name, price, img } = supplement;
    return (
        <div>
            <Col id="cardHover">
                <Card>
                    <Card.Img className="d-block w-75 img-fluid mx-auto" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            Price:  {price} $
                        </Card.Text>
                        <Link to={`/supplements/${p_id}`}>
                            <button className="btn btn-warning">Proceed to Buy</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Supplement;