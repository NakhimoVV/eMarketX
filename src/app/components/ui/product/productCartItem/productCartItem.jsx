import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import { useSelector } from 'react-redux'
import { getProductById } from '../../../../store/products'
import QuantityInput from '../../../common/quantityInput'
import { useQuantity } from '../../../../hooks/useQuantity'

const ProductCartItem = ({ productId, amount }) => {
    const product = useSelector(getProductById(productId))
    const { quantity, handleChange, handleDecrement, handleIncrement } =
        useQuantity(amount)
    return (
        <li className="cartProd">
            <div className="cartProd__image">
                <img src={product.thumbnail} alt="item" />
            </div>
            <div className="cartProd__title">{product.title}</div>
            <div className="cartProd__count">
                <QuantityInput
                    value={quantity}
                    onChange={handleChange}
                    increment={handleIncrement}
                    decrement={handleDecrement}
                />
            </div>
            <div className="cartProd__price">{product.price}</div>
            <div className="cartProd__delete"></div>
        </li>
    )
}
ProductCartItem.propTypes = {
    productId: PropTypes.string,
    amount: PropTypes.number
}

export default ProductCartItem
