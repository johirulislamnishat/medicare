import React from 'react';
import Banner from '../BannerSlider/Banner';
import Healthtips from '../SinglePages/Healthtips';
import QualityCare from '../SinglePages/QualityCare';
import ServiceData from '../SinglePages/ServiceData';
import WhyChooseUs from '../SinglePages/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
            <QualityCare></QualityCare>
            <ServiceData></ServiceData>
            <Healthtips></Healthtips>
        </div>
    );
};

export default Home;