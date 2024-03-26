import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'

const SearchContext = React.createContext()

export const useSearch = () => {
    return useContext(SearchContext)
}

const SearchProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const handleSearchQuery = ({ target }) => {
        setSearchQuery(target.value)
    }
    return (
        <SearchContext.Provider value={{ searchQuery, handleSearchQuery }}>
            {children}
        </SearchContext.Provider>
    )
}

SearchProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default SearchProvider
