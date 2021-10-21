import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';


const Slider = () => {
    const pointer = <FontAwesomeIcon icon={faArrowRight} />
    return (
        <div className="mx-auto" style={{ display: 'block', width: '80%' }}>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 img-fluid "
                        style={{ height: '400px' }}
                        src="https://i.ibb.co/1XfHHzZ/danielle-cerullo-CQf-Nt66tt-ZM-unsplash.png"
                        alt=""
                    />
                    <Carousel.Caption>
                        <div className="bg-dark w-50 mx-auto rounded">
                            <Link style={{ textDecoration: 'none' }} to="/results"><h3 className="text-white">{pointer} Best Results</h3></Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 img-fluid"
                        style={{ height: '400px' }}
                        src="https://i.ibb.co/LSLycxC/danielle-cerullo-CQf-Nt66tt-ZM-unsplash-1.png"
                        alt=""
                    />
                    <Carousel.Caption>

                        <div className="bg-dark w-50 mx-auto rounded" >
                            <Link style={{ textDecoration: 'none' }} to="/home#topService"> <h3 className="text-white">{pointer} Best Trainings</h3></Link>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 img-fluid"
                        style={{ height: '400px' }}
                        src="https://i.ibb.co/txK55Cb/danielle-cerullo-CQf-Nt66tt-ZM-unsplash-2.png"
                        alt=""
                    />
                    <Carousel.Caption>

                        <div className="bg-dark w-75 mx-auto rounded" >
                            <Link style={{ textDecoration: 'none' }} to="/home#topSupplements"><h3 className="text-white">{pointer} Best Supplements</h3></Link>


                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;