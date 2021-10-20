import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFirstAid, faHandHoldingHeart, faHeartbeat, faProcedures } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const WhyChooseUs = () => {

    const heartBeat = <FontAwesomeIcon icon={faHeartbeat} />
    const care = <FontAwesomeIcon icon={faHandHoldingHeart} />
    const firstAid = <FontAwesomeIcon icon={faFirstAid} />
    const careProcedure = <FontAwesomeIcon icon={faProcedures} />

    return (
        <div className="bg-white mt-4 md:mt-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-800 text-center">Why Choose Us</h2>

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                    {/* item 01 */}
                    <div className="shadow-md rounded-md p-3">
                        <span className="text-6xl text-green-500">{heartBeat}</span>

                        <div className="mt-4">

                            <h2 className="text-xl text-gray-700">
                                Quality And Safety
                            </h2>
                            <p className="mt-2 text-base text-gray-500">Our Delmont hospital utilizes state of the art technology and employs a team of true experts.</p>

                        </div>
                    </div>

                    {/* item 02 */}
                    <div className="shadow-md rounded-md p-3">
                        <span className="text-6xl text-green-500">{care}</span>

                        <div className="mt-4">

                            <h2 className="text-xl text-gray-700">
                                Quality And Safety
                            </h2>
                            <p className="mt-2 text-base text-gray-500">Our Delmont hospital utilizes state of the art technology and employs a team of true experts.</p>

                        </div>
                    </div>

                    {/* item 03 */}
                    <div className="shadow-md rounded-md p-3">
                        <span className="text-6xl text-green-500">{firstAid}</span>

                        <div className="mt-4">

                            <h2 className="text-xl text-gray-700">
                                Quality And Safety
                            </h2>
                            <p className="mt-2 text-base text-gray-500">Our Delmont hospital utilizes state of the art technology and employs a team of true experts.</p>

                        </div>
                    </div>

                    {/* item 04 */}
                    <div className="shadow-md rounded-md p-3">
                        <span className="text-6xl text-green-500">{careProcedure}</span>

                        <div className="mt-4">

                            <h2 className="text-xl text-gray-700">
                                Quality And Safety
                            </h2>
                            <p className="mt-2 text-base text-gray-500">Our Delmont hospital utilizes state of the art technology and employs a team of true experts.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;