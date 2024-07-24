import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
    useHistory,
    useLocation
} from 'react-router-dom/cjs/react-router-dom.min'

const SearchContext = React.createContext()

export const useSearch = () => {
    return useContext(SearchContext)
}

const SearchProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [isFocused, setIsFocused] = useState(false)
    const history = useHistory()
    const location = useLocation()
    const [previousPath, setPreviousPath] = useState(location.pathname)

    const handleFocus = () => {
        setIsFocused(true)
    }
    const handleBlur = () => {
        setIsFocused(false)
    }
    const handleSearchQuery = ({ target }) => {
        setSearchQuery(target.value)
    }
    const handleClearSearch = () => {
        setSearchQuery('')
        history.push(previousPath)
    }
    const handleSearchPage = () => {
        if (isFocused) {
            if (searchQuery) {
                if (location.pathname !== '/search') {
                    setPreviousPath(location.pathname)
                }
                history.push('/search')
            } else {
                history.push(previousPath)
            }
        }
    }

    useEffect(() => {
        handleSearchPage()
    }, [searchQuery, history, previousPath, location.pathname])

    return (
        <SearchContext.Provider
            value={{
                searchQuery,
                handleSearchQuery,
                handleFocus,
                handleBlur,
                handleClearSearch
            }}
        >
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
