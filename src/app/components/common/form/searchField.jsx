import React from 'react'
import PropTypes from 'prop-types'

const SearchField = ({ value, onChange, handleFocus, handleBlur, onClear }) => {
    return (
        <>
            <div className="search-field">
                <input
                    name="searchQuery"
                    type="text"
                    value={value}
                    onChange={onChange}
                    placeholder="I want..."
                    autoComplete="off"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className="search-input"
                />
                {value ? (
                    <button className="search-btn" onClick={onClear}>
                        <i className="icon-close"></i>
                    </button>
                ) : (
                    <button className="search-btn">
                        <i className="icon-search"></i>
                    </button>
                )}
            </div>
        </>
    )
}
SearchField.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    handleSearchPage: PropTypes.func,
    handleFocus: PropTypes.func,
    handleBlur: PropTypes.func,
    onClear: PropTypes.func
}
export default SearchField
