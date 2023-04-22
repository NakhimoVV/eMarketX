import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import { Link } from 'react-router-dom'

const CategoryBox = ({ id, title, imageURL }) => {
    return (
        <Link to={`/catalog/${id}`} className="categories__item box">
            <div className="box__wrap-image">
                <img
                    src={`/assets/images/categories/${imageURL}.png`}
                    alt={imageURL}
                    className="box__image"
                />
            </div>
            <p className="box__title">{title}</p>
        </Link>
    )
}

CategoryBox.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired
}

export default CategoryBox
