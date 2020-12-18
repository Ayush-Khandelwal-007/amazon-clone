import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactCountryFlag from "react-country-flag"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { Link } from 'react-router-dom';
import { useBasket } from '../../contexts/Basket';
import { getBasketTotalQuantity } from '../../contexts/reducer';

function HeaderNav() {
    // eslint-disable-next-line
    const [{basket}, dispatch] = useBasket();


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
            <div className="header_nav_links">
                <span className="nav_links_line1">Hello guest</span>
                <span className="nav_links_line2">Sign In</span>
            </div>
            <div className="header_nav_links">
                <span className="nav_links_line1">Returns</span>
                <span className="nav_links_line2">& orders</span>
            </div>
            <Link to="/checkout">
                <div className="header_nav_basket">
                    <span className="basket_icon"><ShoppingBasketIcon fontSize="large" /></span>
                    <span id="no_of_items">{getBasketTotalQuantity(basket)}</span>
                </div>
            </Link>
        </div>
    )
}

export default HeaderNav
