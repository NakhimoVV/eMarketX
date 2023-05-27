import React from 'react'
import Logo from '../components/common/logo'
import SearchField from '../components/common/form/searchField'
import IconNavbar from '../components/ui/iconNavbar'

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__top">
                    <ul className="header__entry-point entry-point">
                        <li className="entry-point__item">Saint-Petersburg</li>
                        <li className="entry-point__item">Actions</li>
                        <li className="entry-point__item">Return</li>
                        <li className="entry-point__item">The shops</li>
                        <li className="entry-point__item">Phone</li>
                    </ul>
                </div>
                <div className="header__bot">
                    <div className="header__nav-element nav-element">
                        <div className="nav-element__logo">
                            <Logo />
                        </div>
                        <div className="nav-element__burger-menu">
                            <div className="burger-menu__icon icon-menu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <nav className="icon-menu__body">
                                <ul className="icon-menu__list">
                                    <li>
                                        <a href="#" className="icon-menu__link">
                                            <span>New</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="icon-menu__link">
                                            <span>Men</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="icon-menu__link">
                                            <span>Women</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="icon-menu__link">
                                            <span>Sale</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="icon-menu__link">
                                            <span>Blog</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="icon-menu__link">
                                            <span>Contact</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="header__search" id="searchBlock">
                        <SearchField />
                        {/* Добавить логику поиска */}
                    </div>
                    <IconNavbar />
                </div>
            </div>
        </header>
    )
}

export default Header
