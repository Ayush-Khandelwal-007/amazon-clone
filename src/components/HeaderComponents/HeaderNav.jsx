import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactCountryFlag from "react-country-flag"
import { Button, Menu } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { Link } from 'react-router-dom';
import { useBasket } from '../../contexts/Basket';
import { getBasketTotalQuantity } from '../../contexts/reducer';
import { auth } from '../../Firebase';

function HeaderNav() {
    // eslint-disable-next-line
    const [state, dispatch] = useBasket();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    let user=state.user;

    const [locInfo, setLocInfo] = useState({ status: "success", country: "India", countryCode: "IN", region: "DL" })

    useEffect(() => {
        Axios.get('http://ip-api.com/json')
            .then(function (response) {
                setLocInfo(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])


    return (
        <div className="header_nav">
            <div className="header_nav_links">
                <span className="nav_links_line1"></span>
                <span className="nav_links_line2"><ReactCountryFlag countryCode={locInfo.countryCode} /></span>
            </div>
            {user ? (
                <div>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        <div className="header_nav_links">
                            <span className="nav_links_line1">Hello {user.displayName}</span>
                            <span className="nav_links_line2">Sign In</span>
                        </div>
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={() => auth.signOut()}>Logout</MenuItem>
                    </Menu>
                </div>
            ) : (
                    <Link to="/signin">
                        <div className="header_nav_links">
                            <span className="nav_links_line1">Hello Guest</span>
                            <span className="nav_links_line2">Sign In</span>
                        </div>
                    </Link>
                )}

            <div className="header_nav_links">
                <span className="nav_links_line1">Returns</span>
                <span className="nav_links_line2">& orders</span>
            </div>
            <Link to="/checkout">
                <div className="header_nav_basket">
                    <span className="basket_icon"><ShoppingBasketIcon fontSize="large" /></span>
                    <span id="no_of_items">{getBasketTotalQuantity(state.basket)}</span>
                </div>
            </Link>
        </div>
    )
}

export default HeaderNav
