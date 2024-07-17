import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import { Link } from 'react-router-dom'
import { calcPrice } from '../../../../utils/calcPrice'
import { useToCart } from '../../../../hooks/useToCart'
import { useFavorites } from '../../../../hooks/useFavorites'
import { useToCompare } from '../../../../hooks/useToCompare'

const ProductListItem = ({ product }) => {
    const { isDisabled, handleClickOnToCart } = useToCart(
        product._id,
        product.price
    )
    const { isFavorite, handleClickOnFavorite } = useFavorites(product._id)
    const { isCompare, handleClickOnToCompare } = useToCompare(product)

    return (
        <li className="product-vList">
            <div className="product-vList__image">
                <img src={product.images[0]} alt="product" />
            </div>
            <Link
                className="product-vList__title"
                to={`${product.category}/${product._id}`}
            >
                {product.title}
            </Link>
            <div className="product-vList__info">
                <p>
                    rating : <span>{product.rating}</span>
                </p>
                <p>
                    stock : <span>{product.stock}</span>
                </p>
                <p>
                    item id : <span>{product._id}</span>
                </p>
            </div>
            <div className="product-vList__actions actions">
                <button
                    className={
                        'actions__button_compare ' + (isCompare ? 'active' : '')
                    }
                    onClick={handleClickOnToCompare}
                >
                    <i className="icon-compare"></i> <span>Compare</span>
                </button>
                <button
                    className={
                        'actions__button_favorite ' +
                        (isFavorite ? 'active' : '')
                    }
                    onClick={handleClickOnFavorite}
                >
                    <i className="icon-heart-empty"></i> <span>Favorites</span>
                </button>
            </div>
            <div className="product-vList__buy">
                <div className="product-vList__price">
                    <p>
                        {calcPrice(product.price, product.discountPercentage)}
                    </p>
                    <p>
                        <span>{product.price}</span> $
                    </p>
                </div>
                <button
                    className="product-vList__button_toCart btn"
                    onClick={handleClickOnToCart}
                    disabled={isDisabled}
                >
                    <i className="icon-to-cart"></i> <span>To cart</span>
                </button>
            </div>
        </li>
    )
}
ProductListItem.propTypes = {
    product: PropTypes.object
}

export default ProductListItem
