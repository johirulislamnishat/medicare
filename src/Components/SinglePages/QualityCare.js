import React from 'react';

const QualityCare = () => {
    return (

        <div className='bg-green-50 mt-6 md:mt-14'>

            <div className='max-w-7xl mx-auto px-4 sm:px-6'>
                <div>
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2">

                        {/* banner content  */}
                        <div className="flex flex-col justify-center">
                            <div>
                                <h3
                                    className="text-indigo-700 text-2xl md:text-4 lg:text-4xl text-center lg:text-left mb-2 md:mb-5">Quality Helthcare Starts <span className='text-green-800'>With Quality Doctors</span></h3>
                                <p className="text-gray-600 text-lg text-center lg:text-left mb-1">As any doctor can tell you, the most crucial step toward healing is having the ridiagnosis. If the disease is precisely identified, a good resolution is far more likely. Conversely, a bad diagnosis usually means a bad outcome, no matter how skilled the physician.</p>
                                <br />
                                <p className="text-gray-600 text-lg text-center lg:text-left mb-6 md:mb-12">If the disease is precisely identified, a good resolution is far more likely. Conversely, a bad diagnosis usually means a bad outcome.</p>

                                <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-10">

                                    <button className='border-none rounded-md py-3 px-5 bg-green-500 text-white text-base'>Contact Us</button>

                                    <button className='border-none rounded-md py-3 px-6 bg-green-500 text-white text-base'>About Us</button>


                                </div>
                            </div>
                        </div>

                        {/* banner image  */}
                        <div className="flex justify-center">
                            <img className="w-5/6 banner-effect banner-hover" src="./assets/qualitycare.png"
                                alt="" />
                        </div>

                    </dl>

                </div>
            </div>
        </div>
    );
};

export default QualityCare;