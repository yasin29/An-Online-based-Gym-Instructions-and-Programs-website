import React from 'react';
import ClientReviews from '../Reviews/ClientReviews';
import Reviews from '../Reviews/Reviews';
import Slider from '../Slider/Slider';
import TopServices from '../TopServices/TopServices';
import TopSupplements from '../TopSupplements/TopSupplements';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <TopServices></TopServices>
            <TopSupplements></TopSupplements>
            <ClientReviews></ClientReviews>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;