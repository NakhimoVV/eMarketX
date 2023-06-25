import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import { useTriggerPopup } from '../../../hooks/useTriggerPopup'
import { useSelector } from 'react-redux'
import { getCurrentUserData } from '../../../store/users'
import { getCartQuantity } from '../../../store/cart'

const IconNavbar = () => {
    const { setOpenPopup } = useTriggerPopup()
    const cartQuantity = useSelector(getCartQuantity())
    // const isLoggedIn = useSelector(getIsLoggedIn())
    const currentUser = useSelector(getCurrentUserData())
    return (
        <nav className="navbar">
            {currentUser ? (
                <Link to="/profile" className="navbar__link navbar__user">
                    <i className="icon-user"></i>
                    <span>{currentUser.name}</span>
                </Link>
            ) : (
                <button
                    onClick={() => setOpenPopup(true)}
                    className="navbar__link navbar__user"
                >
                    <i className="icon-user"></i>
                    <span>LogIn</span>
                </button>
            )}
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
                {cartQuantity > 0 && (
                    <span className="basketQuantity">{cartQuantity}</span>
                )}
            </Link>
        </nav>
    )
}

export default IconNavbar
