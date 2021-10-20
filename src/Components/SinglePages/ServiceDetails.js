import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import WhyChooseUs from './WhyChooseUs'

const ServiceDetails = () => {
    let { id } = useParams();

    const [serviceDetails, setserviceDetails] = useState([]);
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('/serviceDetails.json')
            .then(res => res.json())
            .then(data => setserviceDetails(data.services))
    }, [])

    useEffect(() => {
        const findServiceDetails = serviceDetails.find(services => services.id == id)
        setService(findServiceDetails)
    }, [serviceDetails])

    return (
        <div>

            <div className='bg-green-50 sliderHeight mb-10'>

                <div className='max-w-7xl mx-auto px-4 sm:px-6'>
                    <div className="pt-16 md:pt-16 lg:pt-18 pb-8 md:pb-10 lg:pb-12">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2">

                            {/* banner content  */}
                            <div className="flex flex-col justify-center">
                                <div className="shadow-md rounded-md p-3">
                                    <img className="text-8xl text-green-500" src={service?.image} alt="" />
                                    <div className="mt-4">

                                        <h2 className="text-2xl text-gray-700">Name: {service?.name}</h2>
                                        <p className="mt-2 text-xl text-gray-500">Short Info: {service?.short}</p>
                                        <p className="mt-2 text-xl text-gray-500">Details: {service?.long}</p>

                                    </div>
                                </div>
                            </div>

                            {/* banner image  */}
                            <div className="flex justify-center">
                                <img className="w-4/5 banner-effect banner-hover" src="../assets/banner/banner2.png"
                                    alt="" />
                            </div>

                        </dl>

                    </div>
                </div>
            </div>

            <div>
                <WhyChooseUs></WhyChooseUs>
            </div>
        </div>
    );
};

export default ServiceDetails;