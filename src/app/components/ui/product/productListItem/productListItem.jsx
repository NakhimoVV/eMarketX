import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import { Link } from 'react-router-dom'
import { calcPrice } from '../../../../utils/calcPrice'
import { useToCart } from '../../../../hooks/useToCart'
import Image from '../../../common/Image/Image'
import Actions from '../../actions/actions'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'

const ProductListItem = React.memo(({ product, viewType }) => {
    const { isDisabled, handleClickOnToCart } = useToCart(
        product._id,
        product.price
    )
    const { pathname } = useLocation()

    return (
        <li className="product-vList">
            <div className="product-vList__image">
                <Image imgUrl={product.images[0]} alt={product.title} />
            </div>
            <Link
                className="product-vList__title"
                to={`${pathname === '/favorites' && '/catalog/'}${
                    product.category
                }/${product._id}`}
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
                    sku : <span>{product.sku}</span>
                </p>
            </div>
            <div className="product-vList__actions actions">
                <Actions product={product} viewType={viewType} />
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
})
ProductListItem.propTypes = {
    product: PropTypes.object.isRequired,
    viewType: PropTypes.string.isRequired
}

export default ProductListItem
