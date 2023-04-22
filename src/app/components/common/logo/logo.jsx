import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const Logo = () => {
    return (
        <Link to="/" className="logo-link">
            <span>eMarketX</span>
        </Link>
    )
}

export default Logo
