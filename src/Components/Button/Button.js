import React from 'react';
import { NavLink } from 'react-router-dom';

const Button = () => {
    return (
        <div>
            <NavLink to='sign-up'>
                <button className='btn'>Sign Up</button>
            </NavLink>
        </div>
    );
};

export default Button;