import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import { useTriggerPopup } from '../../../hooks/useTriggerPopup'

const IconNavbar = () => {
    const { setOpenPopup } = useTriggerPopup()
    return (
        <nav className="navbar">
            <button
                onClick={() => setOpenPopup(true)}
                className="navbar__link navbar__user"
            >
                <i className="icon-user"></i>
                <span>LogIn</span>
            </button>
            {/*
                Здесь должен быть фрагмент зависящий
                от Auth? Link/profile : button open portal Modal
            */}
            <Link to="/favorites" className="navbar__link navbar__favorites">
                <i className="icon-heart-empty"></i>
                <span>Favorites</span>
            </Link>
            <Link to="/compare" className="navbar__link navbar__compare">
                <i className="icon-compare"></i>
                <span>Compare</span>
            </Link>
            <Link to="/cart" className="navbar__link navbar__basket">
                <i className="icon-cart"></i>
                <span>Cart</span>
            </Link>
        </nav>
    )
}

export default IconNavbar
