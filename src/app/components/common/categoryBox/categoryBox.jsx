import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import { Link } from 'react-router-dom'

const CategoryBox = ({ _id, title }) => {
    return (
        <Link to={`/catalog/${_id}`} className="categories__item box">
            <div className="box__wrap-image">
                <img
                    src={`/assets/images/categories/${title}.webp`}
                    alt={title}
                    className="box__image"
                />
            </div>
            <p className="box__title">{title}</p>
        </Link>
    )
}

CategoryBox.propTypes = {
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default CategoryBox
