import React from 'react';
import Banner from '../BannerSlider/Banner';
import QualityCare from '../SinglePages/QualityCare';
import WhyChooseUs from '../SinglePages/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
            <QualityCare></QualityCare>
        </div>
    );
};

export default Home;