import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import api from '../../api'
import { calcPrice } from '../../utils/calcPrice'

const ProductPage = ({ productId }) => {
    const [product, setProduct] = useState()
    const [quantity, setQuantity] = useState(0)

    useEffect(() => {
        api.products.getById(+productId).then((data) => setProduct(data))
    }, [])

    const handleIncrement = () => setQuantity((prevState) => prevState + 1)
    const handleDecrement = () => {
        setQuantity((prevState) => (prevState > 0 ? prevState - 1 : prevState))
    }

    const handleChange = ({ target }) => {
        setQuantity(+target.value)
    }

    if (product) {
        return (
            <div className="productPage">
                <div className="productPage__title">
                    <h1>{product.title}</h1>
                </div>
                <div className="productPage__subtitle">
                    <p>rating: {product.rating}</p>
                    <p>id item: {product.id}</p>
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
                        <button className="target__button_tocart btn">
                            <i className="icon-to-cart"></i>{' '}
                            <span>To cart</span>
                        </button>
                        <div className="target__quantity quantity">
                            <button
                                className="quantity__button quantity__button_decrement"
                                onClick={handleDecrement}
                            >
                                –
                            </button>
                            <input
                                className="quantity__input"
                                type="number"
                                min={0}
                                value={quantity}
                                onChange={handleChange}
                            ></input>
                            <button
                                className="quantity__button quantity__button_increment"
                                onClick={handleIncrement}
                            >
                                +
                            </button>
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
