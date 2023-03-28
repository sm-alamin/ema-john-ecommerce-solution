import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <ul className='navbar'>
                    <li><a href="/order">Order</a></li>
                    <li><a href="/order-review">Order Review</a></li>
                    <li><a href="/manage-inventory">Manage Inventory</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;