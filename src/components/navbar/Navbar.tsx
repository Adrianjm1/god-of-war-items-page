import { useState } from 'react';
import { rootImage } from '../../core/rootImages';
import './navbar.css'
import useResize from '../../hooks/useResize';
import { NavbarItem } from './NavbarItem';

const NAVBAR_BREAKPOINT = 1238;


export const Navbar = () => {
    const navbarStartItems = ["Currency", "Items", "Accounts", "Services", "Swap", "Sell"]
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const isWindowLarger = useResize(NAVBAR_BREAKPOINT);


    return (
        <div className="navbar">
            <div className="items-start">
                <div className='mainContent'>
                    <div className="logo"> <img width={200} src={rootImage.navbar.logo} /></div>
                    <div className="hamburger-menu" onClick={toggleOpen}>
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
                <div className="divider"></div>
                {(isOpen || isWindowLarger) &&
                    <div className='navbar-items-start'>
                        {navbarStartItems.map(item => <NavbarItem item={item} />)}
                    </div>
                }
            </div>
            {(isOpen || isWindowLarger) &&
                <div className="items-end">
                    <div className="navbar-item">
                        {'USD'} <img className='downArrow-icon' width={10} src={rootImage.navbar.downArrow} />
                    </div>
                    <div className="navbar-item">
                        <i className="fa fa-shopping-cart"></i> <p> Cart (5)</p>
                    </div>
                    <button className="signup-button" >
                        Sign in    <i className="fa fa-user"></i>
                    </button>
                </div>
            }
        </div>
    );
}