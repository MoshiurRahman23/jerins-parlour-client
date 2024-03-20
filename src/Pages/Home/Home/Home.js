import React from 'react';
import Services from '../Services/Services';
import Banner from '../Banner/Banner';
import ScreenPag from '../ScreenPag/ScreenPag';
import Testimonial from '../Testimonial/Testimonial';
import InputBar from '../InputBar/InputBar';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ScreenPag></ScreenPag>
            <Testimonial></Testimonial>
            <InputBar></InputBar>
        </div>
    );
};

export default Home;