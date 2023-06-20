import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import { calcPrice } from '../../utils/calcPrice'
import { useDispatch, useSelector } from 'react-redux'
import { getProductById } from '../../store/products'
import { addToCart } from '../../store/cart'
import QuantityInput from '../../components/common/quantityInput'
import { useQuantity } from '../../hooks/useQuantity'

const ProductPage = ({ productId }) => {
    const dispatch = useDispatch()
    const product = useSelector(getProductById(productId))

    const {
        quantity,
        handleChange,
        handleIncrement,
        handleDecrement,
        setQuantity
    } = useQuantity(0)

    const [isDisabled, setDisabled] = useState(false)

    const handleClickOnToCart = () => {
        dispatch(
            addToCart({
                id: product._id
            })
        )
        setDisabled(true)
        setQuantity(1)
    }

    if (product) {
        return (
            <div className="productPage">
                <div className="productPage__title">
                    <h1>{product.title}</h1>
                </div>
                <div className="productPage__subtitle">
                    <p>rating: {product.rating}</p>
                    <p>id item: {product._id}</p>
                </div>
                <div className="productPage__body item">
                    <div className="item__images">
                        <img src={product.images[0]} alt="pics" />
                    </div>
                    <div className="item__description">
                        <p>
                            Brand: <span>{product.brand}</span>
                        </p>
                        <p>
                            Description: <span>{product.description}</span>
                        </p>
                        <p>
                            Stock: <span>{product.stock}</span>
                        </p>
                    </div>
                    <div className="item__target target">
                        <div className="target__prices">
                            <p className="price">
                                <span>
                                    {calcPrice(
                                        product.price,
                                        product.discountPercentage
                                    )}
                                </span>
                                <span>{product.discountPercentage}%</span>
                            </p>
                            <p className="priceDiscout">
                                <span>{product.price}</span>$
                            </p>
                        </div>
                        <button
                            className="target__button_tocart btn"
                            onClick={handleClickOnToCart}
                            disabled={isDisabled}
                        >
                            <i className="icon-to-cart"></i>{' '}
                            <span>To cart</span>
                        </button>
                        <div className="target__quantity">
                            <QuantityInput
                                value={quantity}
                                onChange={handleChange}
                                increment={handleIncrement}
                                decrement={handleDecrement}
                            />
                        </div>
                        <div className="target__actions actions">
                            <button className="actions__button_compare">
                                <i className="icon-compare"></i>{' '}
                                <span>Compare</span>
                            </button>
                            <button className="actions__button_favorite">
                                <i className="icon-heart-empty"></i>{' '}
                                <span>Favorite</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return 'Loading ...'
}
ProductPage.propTypes = {
    productId: PropTypes.string
}

export default ProductPage
