import React from 'react'
import PropTypes from 'prop-types'
// import { useLocation } from 'react-router-dom'

const Breadcrumbs = ({ page, onGoMain }) => {
    // const isMainPage = page.id === 'main'
    // const mainClasses = 'breadcrumb-item' + (isMainPage ? ' active' : '')
    // const { pathname } = useLocation()
    // console.log(pathname)
    return (
        <nav>
            <ul className="breadcrumbs">
                Breadcrumbs
                {/* <li className={mainClasses} onClick={onGoMain}>
                    Главная
                </li> */}
                {/* {!isMainPage && (
                    <li className="breadcrumb-item active">{page.text}</li>
                )} */}
            </ul>
        </nav>
    )
}
Breadcrumbs.propTypes = { page: PropTypes.array, onGoMain: PropTypes.func }

export default Breadcrumbs
