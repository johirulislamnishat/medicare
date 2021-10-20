import React from 'react';
import { NavLink } from 'react-router-dom';

const Services = (props) => {

    // console.log(props)
    const { image, name, short, id } = props.serviceData;

    return (

        <div className="shadow-md rounded-md p-3">

            <img className="text-6xl text-green-500" src={image} alt="" />
            <div className="mt-4">

                <h2 className="text-xl text-gray-700">{name}</h2>
                <p className="mt-2 text-base text-gray-500">{short}</p>

                <div>
                    <NavLink to={`/servicedetails/${id}`} className='bg-blue-500'>See More</NavLink>
                </div>
            </div>
        </div>

    );
};

export default Services;