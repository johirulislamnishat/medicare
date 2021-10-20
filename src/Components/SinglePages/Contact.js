import React from 'react';

const Contact = () => {
    return (
        <div className='mt-16'>

            <div className="max-w-screen-md mx-auto p-5">
                <div className="text-center mb-16">

                    <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
                        Get In <span className="text-green-600">Touch</span>
                    </h3>
                </div>

                <form className="w-full">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                First Name
                            </label>
                            <input className="appearance-none bg-transparent border-b border-red-500 w-full text-gray-700 mr-3 p-4 leading-tight focus:outline-none focus:bg-gray-200" type="text" placeholder="Jane" aria-label="Full name" />
                            <p className="text-red-500 text-xs italic mt-1">Please fill out this field.</p>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Last Name
                            </label>
                            <input className="appearance-none bg-transparent border-b border-green-500 w-full text-gray-700 mr-3 p-4 leading-tight focus:outline-none focus:bg-gray-200" type="text" placeholder="Doe" aria-label="Full name" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Email Address
                            </label>
                            <input className="appearance-none bg-transparent border-b border-green-500 w-full text-gray-700 mr-3 p-4 leading-tight focus:outline-none focus:bg-gray-200" type="email" placeholder="jane@exp.com" aria-label="Full name" />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Your Message
                            </label>
                            <textarea rows="10" className="appearance-none bg-transparent border-b border-green-500 w-full text-gray-700 mr-3 p-4 focus:bg-gray-200 leading-tight focus:outline-none" type="email" placeholder="jane@exp.com" aria-label="Full name">

                            </textarea>
                        </div>
                        <div className="flex justify-between w-full px-3">
                            <div className="md:flex md:items-center">
                                <label className="block text-gray-500 font-bold">
                                    <input className="mr-2 leading-tight" type="checkbox" />
                                    <span className="text-sm">
                                        Send me your newsletter!
                                    </span>
                                </label>
                            </div>
                            <button className="shadow bg-green-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="submit">
                                Send Message
                            </button>
                        </div>

                    </div>

                </form>
            </div>



            <a href="https://componentity.com" target="_blank" className="block">
                <img src="http://codenawis.com/componentity/wp-content/uploads/2020/08/logo-componentity-%E2%80%93-9.png" className="w-48 mx-auto my-5" />
            </a>





        </div>
    );
};

export default Contact;