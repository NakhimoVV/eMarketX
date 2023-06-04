import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import { Link } from 'react-router-dom'
import { calcPrice } from '../../../../utils/calcPrice'

const ProductCard = ({ product, categoryId }) => {
    return (
        <li className="product-vCard" key={product._id}>
            <div className="product-vCard__image">
                <img src={product.images[0]} alt="product" />
            </div>
            <Link
                className="product-vCard__title"
                to={`${categoryId}/${product._id}`}
            >
                {product.title}
            </Link>
            <div className="product-vCard__info">
                <p>
                    stock : <span>{product.stock}</span>
                </p>
            </div>
            <div className="product-vCard__actions actions">
                <button className="actions__button_compare">
                    <i className="icon-compare"></i>
                </button>
                <button className="actions__button_favorite">
                    <i className="icon-heart-empty"></i>
                </button>
            </div>
            <div className="product-vCard__price">
                <p>{calcPrice(product.price, product.discountPercentage)}</p>
                <p>
                    <span>{product.price}</span> $
                </p>
            </div>
            <button className="btn product-vCard__button_toCart ">
                <i className="icon-to-cart"></i>
            </button>
        </li>
    )
}
ProductCard.propTypes = {
    product: PropTypes.object,
    categoryId: PropTypes.string
}

export default ProductCard
