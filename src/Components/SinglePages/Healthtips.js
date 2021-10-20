import React from 'react';

const Healthtips = () => {
    return (
        <div className='mt-14'>
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-800 text-center">Health Tips</h2>
            <div className="max-w-7xl mx-auto p-5 sm:p-10 md:p-16">
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                    <div className="rounded overflow-hidden shadow-lg">
                        <a href="#"><div className="relative">
                            <img className="w-full" src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Sunset in the mountains" />
                            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                            <a href="#!"><div className="absolute bottom-0 left-0 bg-green-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                Photos
                            </div></a>
                            <a href="!#"><div className="text-sm absolute top-0 right-0 bg-green-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                <span className="font-bold">27</span>
                                <small>March</small>
                            </div></a>
                        </div></a>
                        <div className="px-6 py-4">
                            <a href="#" className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">Reduce intake of harmful fats.</a>
                            <p className="text-gray-500 text-sm">
                                Do Not Put Toxic Things Into Your Body. Share on Pinterest · 2. Lift Things and Move Around.
                            </p>
                        </div>
                        <div className="px-6 py-4 flex flex-row items-center">
                            <span href="#" className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">

                                <span className="ml-1">6 mins ago</span></span>
                        </div>
                    </div>
                    <div className="rounded overflow-hidden shadow-lg">
                        <a href="#"><div className="relative">
                            <img className="w-full" src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Sunset in the mountains" />
                            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                            <a href="#!"><div className="absolute bottom-0 left-0 bg-green-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                Photos
                            </div></a>
                            <a href="!#"><div className="text-sm absolute top-0 right-0 bg-green-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                <span className="font-bold">20</span>
                                <small>March</small>
                            </div></a>
                        </div></a>
                        <div className="px-6 py-4">
                            <a href="#" className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">Consume less salt and sugar.</a>
                            <p className="text-gray-500 text-sm">
                                Keeping a healthy weight may help improve your health.
                            </p>
                        </div>
                        <div className="px-6 py-4 flex flex-row items-center">
                            <span href="#" className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center">

                                <span className="ml-1">3 mins read</span></span>
                        </div>
                    </div>
                    <div className="rounded overflow-hidden shadow-lg">
                        <a href="#"><div className="relative">
                            <img className="w-full" src="https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Sunset in the mountains" />
                            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                            <a href="#!"><div className="absolute bottom-0 left-0 bg-green-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                Photos
                            </div></a>
                            <a href="!#"><div className="text-sm absolute top-0 right-0 bg-green-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                <span className="font-bold">15</span>
                                <small>April</small>
                            </div></a>
                        </div></a>
                        <div className="px-6 py-4">
                            <a href="#" className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">Eat a healthy diet.</a>
                            <p className="text-gray-500 text-sm">
                                The weight that is healthiest for you may be higher than that of a younger person.
                            </p>
                        </div>
                        <div className="px-6 py-4 flex flex-row items-center">
                            <span href="#" className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center">

                                <span className="ml-1">6 mins read</span></span>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Healthtips;