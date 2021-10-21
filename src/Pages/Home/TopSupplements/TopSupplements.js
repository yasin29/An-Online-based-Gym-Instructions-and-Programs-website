import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useSupplements from '../../../hooks/useSupplements';
import Supplement from '../../Supplement/Supplement';

const TopSupplements = () => {
    const [supplements] = useSupplements();
    const items = supplements.slice(0, 6);
    return (
        <div id="topSupplements" className="container bg-light rounded p-3 my-4">
            <h2>PUTTING THE SCIENCE BACK IN SUPPLEMENTATION</h2>
            <p>STOP PUTTING YOUR FAITH IN PROPRIETARY BLENDS AND INFLATED LABEL CLAIMS. OUR CLINICALLY DOSED FORMULAS ARE TRUSTED BY THE PROS.</p>
            {
                supplements.length && <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        items.map(supplement => <Supplement key={supplement.p_id} supplement={supplement}></Supplement>)
                    }
                </Row>
            }
            <Link style={{ textDecoration: 'none' }} to="/suppliments"><h2>Click for more suppliments---</h2></Link>
        </div>

    );
};

export default TopSupplements;