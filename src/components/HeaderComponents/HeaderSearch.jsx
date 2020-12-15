import React from 'react'
import SearchIcon from "@material-ui/icons/Search";

function HeaderSearch() {
    return (
        <div className="header_search">
            <input
                className="header_search_input"
            />
            <SearchIcon className="header_search_icon" />
        </div>
    )
}

export default HeaderSearch
