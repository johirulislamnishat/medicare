import React, { useEffect, useState } from 'react';
import ServiceDetails from './ServiceDetails';
import Services from './Services';

const ServiceData = () => {

    const [services, setService] = useState([])
    const [detailService, setDetailService] = useState([])

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setService(data))

    }, [])

    const handleService = (service) => {
        const newService = [...detailService, service]
        setDetailService(newService)
    }
    return (
        <div>

            <div className="bg-white mt-4 md:mt-14">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-800 text-center">Special Service For Patients</h2>

                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                        {
                            services.map(service => <Services
                                key={service.id}
                                serviceData={service}
                                getServices={handleService}
                            ></Services>)
                        }


                    </div>

                </div>

            </div>

        </div>
    );
};

export default ServiceData;