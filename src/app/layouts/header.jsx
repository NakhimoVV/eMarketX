import React from 'react'
import Logo from '../components/common/logo'
import SearchField from '../components/common/form/searchField'
import IconNavbar from '../components/ui/iconNavbar'
import { useSearch } from '../hooks/useSearch'

const Header = () => {
    const {
        searchQuery,
        handleSearchQuery,
        handleFocus,
        handleBlur,
        handleClearSearch
    } = useSearch()
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__bot">
                    <div className="header__nav-element nav-element">
                        <div className="nav-element__logo">
                            <Logo />
                        </div>
                    </div>
                    <div className="header__search" id="searchBlock">
                        <SearchField
                            value={searchQuery}
                            onChange={handleSearchQuery}
                            handleFocus={handleFocus}
                            handleBlur={handleBlur}
                            onClear={handleClearSearch}
                        />
                    </div>
                    <IconNavbar />
                </div>
            </div>
        </header>
    )
}

export default Header
