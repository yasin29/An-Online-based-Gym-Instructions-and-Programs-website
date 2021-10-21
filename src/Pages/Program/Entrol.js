import React, { useEffect, useState } from 'react';
import { Card, Row, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

const Entrol = () => {
    const [programs, setPrograms] = useState([]);
    useEffect(() => {
        fetch('https://api.jsonbin.io/b/61710232aa02be1d445c8828')
            .then(res => res.json())
            .then(data => setPrograms(data))
    }, [])
    const { programId } = useParams();
    const params = parseInt(programId);
    console.log(programs);
    console.log(typeof params);
    const history = useHistory();
    const handleClick = () => {
        history.push('/purchase')
    }
    return (
        <div className="my-3">
            <h2>Product Details</h2>
            <p className="text-danger">Product #Id : {programId}</p>
            {
                programs.length && <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        programs.map(program => params === program.id && <Card key={program.id} className="p-3 mx-auto" id="cardHover">
                            <Card.Img className="d-block w-75 img-fluid mx-auto" variant="top" src={program.img} />
                            <Card.Body style={{ height: '170px' }}>
                                <Card.Title>{program.name}</Card.Title>
                                <Card.Text>
                                    {program.description}
                                </Card.Text>
                                <Button onClick={() => handleClick()} className="w-50 mx-auto mb-3 bg-danger"> Enrol Now</Button>
                            </Card.Body>

                        </Card>)
                    }
                </Row>
            }
        </div>
    );
};

export default Entrol;