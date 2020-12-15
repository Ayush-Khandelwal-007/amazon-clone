import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderComponents/Header.css';
import HeaderNav from './HeaderComponents/HeaderNav';
import HeaderSearch from './HeaderComponents/HeaderSearch';

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header_logo"
                    src="https://onlinebusinessmanager.com/wp-content/uploads/2018/09/white-amazon-logo-png-6.png"
                    alt="logo"
                />
            </Link>
            <HeaderSearch />
            <HeaderNav />
        </div>
    )
}

export default Header
