import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { calcPrice } from '../../../../utils/calcPrice'
import './style.scss'
import { useToCart } from '../../../../hooks/useToCart'
import Image from '../../../common/Image/Image'
import Actions from '../../actions/actions'

const ProductCard = ({ product, viewType }) => {
    const { isDisabled, handleClickOnToCart } = useToCart(
        product._id,
        product.price
    )
    return (
        <li className="product-vCard">
            <Link to={`${product.category}/${product._id}`}>
                <div className="product-vCard__image">
                    <Image imgUrl={product.images[0]} alt={product.title} />
                </div>
                <div className="product-vCard__title">{product.title}</div>
                <div className="product-vCard__info">
                    <p>
                        stock : <span>{product.stock}</span>
                    </p>
                </div>
            </Link>
            <div className="product-vCard__actions actions">
                <Actions product={product} viewType={viewType} />
            </div>
            <div className="product-vCard__price">
                <p>{calcPrice(product.price, product.discountPercentage)}</p>
                <p>
                    <span>{product.price}</span> $
                </p>
            </div>
            <button
                className="btn product-vCard__button_toCart "
                onClick={handleClickOnToCart}
                disabled={isDisabled}
            >
                <i className="icon-to-cart"></i>
            </button>
        </li>
    )
}
ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
    viewType: PropTypes.string.isRequired
}

export default ProductCard
