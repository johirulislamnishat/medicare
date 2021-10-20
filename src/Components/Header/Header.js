import './Header.css'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import useAuth from '../hooks/useAuth';


const Header = () => {

    const location = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const contact = <FontAwesomeIcon icon={faPhoneAlt} />
    const facebook = <FontAwesomeIcon icon={faFacebookF} />
    const linkedin = <FontAwesomeIcon icon={faLinkedin} />
    const email = <FontAwesomeIcon icon={faEnvelope} />
    const twitter = <FontAwesomeIcon icon={faTwitter} />
    // const menuOpen = <FontAwesomeIcon icon={faHamburger} />
    // const menuClose = <FontAwesomeIcon icon={faTimes} />

    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    const { user, logOut } = useAuth();

    return (
        <div>
            <div className="border-b topbar h-12 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div
                        className="pt-3 text-indigo-600 
                        flex justify-between items-center md:justify-start md:space-x-10">
                        <div className='flex space-x-4'>
                            <div className='space-x-2'>
                                <span>{location}</span>
                                <span>234 Triumph, Los Angeles, California, US</span>
                            </div>

                            <div className='space-x-2'>
                                <span>{contact}</span>
                                <span>+105-599993</span>
                            </div>
                        </div>

                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <div className='space-x-4'>
                                <span>{facebook}</span>
                                <span>{linkedin}</span>
                                <span>{twitter}</span>
                                <span>{email}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div>
                <nav className='navbar max-w-7xl mx-auto px-4 sm:px-6'>
                    <NavLink to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        EPIC
                    </NavLink>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <NavLink to='/home' className='nav-links text-green-700 font-medium' onClick={closeMobileMenu}>
                                Home
                            </NavLink>
                        </li>

                        <li
                            className='nav-item'
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                        >
                            <NavLink
                                to='/servicedetails'
                                className='nav-links text-green-700 font-medium'
                                onClick={closeMobileMenu}
                            >
                                Services <i className='fas fa-caret-down' />
                            </NavLink>
                            {dropdown && <Dropdown />}
                        </li>
                        <li className='nav-item'>
                            <NavLink
                                to='/health'
                                className='nav-links text-green-700 font-medium'
                                onClick={closeMobileMenu}
                            >
                                Health Tips
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink
                                to='/carrer'
                                className='nav-links text-green-700 font-medium'
                                onClick={closeMobileMenu}
                            >
                                Carrer
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink
                                to='/contact'
                                className='nav-links text-green-700 font-medium'
                                onClick={closeMobileMenu}
                            >
                                Contact Us
                            </NavLink>
                        </li>

                        <li className='nav-item'>
                            <NavLink to='/appointment' className='nav-links border-none rounded-md py-3 px-5 bg-green-600 text-white font-medium' onClick={closeMobileMenu}>
                                Appointment
                            </NavLink>
                        </li>
                        <span>{user.displayName}</span>
                        {user?.email &&
                            <li className='nav-item'>

                                <NavLink to='/login' className='nav-links bg-green-600 text-white font-medium border-none rounded-md py-3 px-5' onClick={closeMobileMenu}>
                                    Login
                                </NavLink>
                                <NavLink to='/login' className='nav-links bg-green-600 text-white font-medium ' onClick={closeMobileMenu, logOut}>
                                    Log Out
                                </NavLink>
                            </li>}
                        <li>
                            <NavLink
                                to='/login'
                                className='nav-links-mobile bg-blue-500'
                                onClick={closeMobileMenu}
                            >
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    );
};

export default Header;