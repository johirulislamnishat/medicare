import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './Banner.css'



class Banner extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            classNameName: 'slides'
        };

        return (
            <div>
                <Slider {...settings}>

                    {/* slider 01 */}
                    <div className='bg-green-50 sliderHeight'>

                        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
                            <div className="py-16 md:py-20">
                                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2">

                                    {/* banner content  */}
                                    <div className="flex flex-col justify-center">
                                        <div>
                                            <h3
                                                className="text-indigo-700 text-2xl md:text-4 lg:text-4xl text-center lg:text-left mb-2 md:mb-5">Welcome to our Medical Care Center. We take care our patients health.
                                            </h3>
                                            <p className="text-gray-600 text-lg text-center lg:text-left mb-6 md:mb-12">I realized that becoming a doctor, I can only help a small community. But by becoming a doctor, I can help my whole country.</p>

                                            <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-10">

                                                <a href="#"><img className="icon-effect icon-hover w-36"
                                                    src="./assets/icons/Google-Play-Badge.png" alt="" /></a>
                                                <a href="#"><img className="icon-effect icon-hover w-36"
                                                    src="./assets/icons/App-Store-Badge.png" alt="" /></a>

                                            </div>
                                        </div>
                                    </div>

                                    {/* banner image  */}
                                    <div className="flex justify-center">
                                        <img className="w-4/5 banner-effect banner-hover" src="./assets/banner/banner1.png"
                                            alt="" />
                                    </div>

                                </dl>

                            </div>
                        </div>
                    </div>

                    {/* slider 02 */}
                    <div className='bg-green-50 sliderHeight'>

                        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
                            <div className="pt-16 md:pt-16 lg:pt-18 pb-8 md:pb-10 lg:pb-12">
                                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2">

                                    {/* banner content  */}
                                    <div className="flex flex-col justify-center">
                                        <div>
                                            <h3
                                                className="text-indigo-700 text-2xl md:text-4 lg:text-4xl text-center lg:text-left mb-2 md:mb-5">Welcome to our Medical Care Center. We take care our patients health.
                                            </h3>
                                            <p className="text-gray-600 text-lg text-center lg:text-left mb-6 md:mb-12">I realized that becoming a doctor, I can only help a small community. But by becoming a doctor, I can help my whole country.</p>

                                            <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-10">

                                                <a href="#"><img className="icon-effect icon-hover w-36"
                                                    src="./assets/icons/Google-Play-Badge.png" alt="" /></a>
                                                <a href="#"><img className="icon-effect icon-hover w-36"
                                                    src="./assets/icons/App-Store-Badge.png" alt="" /></a>

                                            </div>
                                        </div>
                                    </div>

                                    {/* banner image  */}
                                    <div className="flex justify-center">
                                        <img className="w-4/5 banner-effect banner-hover" src="./assets/banner/banner2.png"
                                            alt="" />
                                    </div>

                                </dl>

                            </div>
                        </div>
                    </div>

                    {/* slider 03 */}
                    <div className='bg-green-50 sliderHeight'>

                        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
                            <div className="pt-16 md:pt-16 lg:pt-18 pb-8 md:pb-10 lg:pb-12">
                                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2">

                                    {/* banner content  */}
                                    <div className="flex flex-col justify-center">
                                        <div>
                                            <h3
                                                className="text-indigo-700 text-2xl md:text-4 lg:text-4xl text-center lg:text-left mb-2 md:mb-5">Welcome to our Medical Care Center. We take care our patients health.
                                            </h3>
                                            <p className="text-gray-600 text-lg text-center lg:text-left mb-6 md:mb-12">I realized that becoming a doctor, I can only help a small community. But by becoming a doctor, I can help my whole country.</p>

                                            <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-10">

                                                <a href="#"><img className="icon-effect icon-hover w-36"
                                                    src="./assets/icons/Google-Play-Badge.png" alt="" /></a>
                                                <a href="#"><img className="icon-effect icon-hover w-36"
                                                    src="./assets/icons/App-Store-Badge.png" alt="" /></a>

                                            </div>
                                        </div>
                                    </div>

                                    {/* banner image  */}
                                    <div className="flex justify-center">
                                        <img className="w-4/5 banner-effect banner-hover" src="./assets/banner/banner3.png"
                                            alt="" />
                                    </div>

                                </dl>

                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    };
}

export default Banner;