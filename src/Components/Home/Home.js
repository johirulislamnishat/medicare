import React from 'react';
import Banner from '../BannerSlider/Banner';
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
        </div>
    );
};

export default Home;