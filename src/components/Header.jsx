import React from 'react';
import './HeaderComponents/Header.css';
import HeaderNav from './HeaderComponents/HeaderNav';
import HeaderSearch from './HeaderComponents/HeaderSearch';

function Header() {
    return (
        <div className="header">
            <img
                className="header_logo"
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="logo"
            />
            <HeaderSearch/>
            <HeaderNav/>
        </div>
    )
}

export default Header
