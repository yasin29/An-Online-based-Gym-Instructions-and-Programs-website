import React, { useEffect, useState } from 'react';
import { Card, Row, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

const ProceedBuy = () => {
    const [supplements, setSupplements] = useState([]);
    useEffect(() => {
        fetch('https://api.jsonbin.io/b/61716ee5aa02be1d445cb7be')
            .then(res => res.json())
            .then(data => setSupplements(data))
    }, [])
    const { supplementsId } = useParams();
    const params = parseInt(supplementsId);
    console.log(supplements);
    console.log(typeof params);

    const history = useHistory();
    const handleClick = () => {
        history.push('/purchase')
    }
    return (
        <div className="my-3">
            <h2>Product Details</h2>
            <p className="text-danger">Product #Id : {supplementsId}</p>
            {
                supplements.length && <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        supplements.map(supplement => params === supplement.p_id && <Card key={supplement.p_id} className="p-3 mx-auto" id="cardHover">
                            <Card.Img className="d-block w-75 img-fluid mx-auto" variant="top" src={supplement.img} />
                            <Card.Body style={{ height: '170px' }}>
                                <Card.Title>{supplement.name}</Card.Title>
                                <Card.Text>
                                    {supplement.description}
                                </Card.Text>
                                <Button onClick={() => handleClick()} className="w-50 mx-auto mb-3 bg-danger"> Buy Now</Button>
                            </Card.Body>

                        </Card>)
                    }
                </Row>
            }
        </div>
    );
};

export default ProceedBuy;