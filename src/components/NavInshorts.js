import React from 'react';
import './NavInshorts.css';
import HamburgerDrawer from './HamburgerDrawer';

const NavInshorts = ({ setCategory }) => {
    return (
        <div className='nav'>
            <div className='icon'>
                <HamburgerDrawer setCategory= { setCategory }/>
            </div>

            <img style={{ cursor: "pointer" }} src='https://cdn5.f-cdn.com/contestentries/1418875/21876317/5ba3902c5c122_thumb900.jpg' height='80%' alt='logo'/>
        </div>
    );
};

export default NavInshorts
