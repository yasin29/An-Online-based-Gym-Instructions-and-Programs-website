import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Article = ({ article }) => {
    const { name, img, description, url } = article;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Button><a target='blank' style={{ color: 'white', textDecoration: 'none' }} href={url}>Learn More</a></Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Article;