import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import usePrograms from '../../../hooks/usePrograms';
import Program from '../../Program/Program';

const TopServices = () => {
    const [programs] = usePrograms();
    return (
        <div id="topService" className="container bg-light rounded p-3 my-4">
            <h2>PUTTING THE SCIENCE BACK IN STRENGTH</h2>
            <p>EACH PROGRAM IS DESIGNED TO GET YOU LOOKING, MOVING AND FEELING LIKE AN ATHLETE...WHETHER YOU TRAIN AT HOME OR AT THE GYM!</p>
            {
                programs.length && <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        programs.map(program => <Program key={program.id} program={program}></Program>)
                    }
                </Row>
            }
            <Link style={{ textDecoration: 'none' }} to="/programs"><h2>Click for more programs---</h2></Link>
        </div>
    );
};

export default TopServices;