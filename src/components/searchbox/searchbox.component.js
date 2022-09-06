import React from "react";

const SearchBox = ({ searchChange }) => {

    return (
        <div className="pa2">
            <input className="pa3 ba b--bgreen bg-lightest-blue"
                type="search"
                placeholder="searching..."
                onChange={searchChange} />
        </div>
    )
}

export default SearchBox;