import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

const IconNavbar = () => {
    return (
        <nav className="navbar">
            <Link to="/login" className="navbar__link navbar__user">
                <i className="icon-user"></i>
                <span>LogIn</span>
            </Link>
            {/*
                Здесь должен быть фрагмент зависящий
                от Auth? Link/profile : button open portal Modal
            */}
            <a className="navbar__link navbar__favorites">
                <i className="icon-heart-empty"></i>
                <span>Favorites</span>
            </a>
            <a className="navbar__link navbar__compare">
                <i className="icon-compare"></i>
                <span>Compare</span>
            </a>
            <a className="navbar__link navbar__basket">
                <i className="icon-cart"></i>
                <span>Cart</span>
            </a>
        </nav>
    )
}

export default IconNavbar
