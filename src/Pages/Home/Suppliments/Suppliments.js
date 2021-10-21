import React from 'react';
import { Row } from 'react-bootstrap';
import useSupplements from '../../../hooks/useSupplements';
import Supplement from '../../Supplement/Supplement';

const Suppliments = () => {
    const [supplements] = useSupplements()
    return (
        <div>
            <div className="container bg-light my-5 p-3">
                <h1>RX WORKOUT SUPPLEMENTS</h1>
                <p className='mt-3'>Trust In Every Bottle</p>
                {
                    supplements.length && <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            supplements.map(supplement => <Supplement key={supplement.p_id} supplement={supplement}></Supplement>)
                        }
                    </Row>
                }
            </div>
        </div>
    );
};

export default Suppliments;