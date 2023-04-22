import React from 'react'
import PropTypes from 'prop-types'

const SearchField = ({ value, onChange }) => {
    return (
        <div className="search-field">
            <input
                name="searchQuery"
                type="text"
                value={value}
                onChange={onChange}
                placeholder="I want..."
                autoComplete="off"
                className="search-input"
            />
            <button className="search-btn">
                <i className="icon-search"></i>
            </button>
        </div>
    )
}
SearchField.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
}
export default SearchField
