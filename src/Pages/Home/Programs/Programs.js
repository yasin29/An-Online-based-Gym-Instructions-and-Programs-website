import React from 'react';
import { Row } from 'react-bootstrap';
import usePrograms from '../../../hooks/usePrograms';
import Program from '../../Program/Program';

const Programs = () => {
    const [programs] = usePrograms();
    console.log(programs)
    return (
        <div className="container bg-light my-5 p-3">
            <h1>PROGRAMS and ROUTINES</h1>
            <p className='mt-3'> The athlean look is muscular, strong, and ripped. It is the ideal balance of muscle to body fat that is optimized for performance without sacrificing aesthetics. Each of our training programs is designed to achieve that goal. While we do offer programs that allow for focused muscle growth or fat loss we never lose sight of the ultimate goal…looking, feeling and moving like an athlete!</p>
            {
                programs.length && <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        programs.map(program => <Program key={program.id} program={program}></Program>)
                    }
                </Row>
            }
        </div >
    );
};

export default Programs;