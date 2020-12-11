import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactCountryFlag from "react-country-flag"



function HeaderNav() {

    const [locInfo, setLocInfo] = useState({status: "success", country: "India", countryCode: "IN", region: "DL"})

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
                <span className="nav_links_line1">Hello guest</span>
                <span className="nav_links_line2">Sign In</span>
            </div>
            <div className="header_nav_links">
                <span className="nav_links_line1">Returns</span>
                <span className="nav_links_line2">& orders</span>
            </div>
            <div className="header_nav_links">
                <span className="nav_links_line1"></span>
                <span className="nav_links_line2"><ReactCountryFlag countryCode={locInfo.countryCode} /></span>
            </div>
            <div className="header_nav_links">
                <span className="nav_links_line1"></span>
                <span className="nav_links_line2"></span>
            </div>
        </div>
    )
}

export default HeaderNav
