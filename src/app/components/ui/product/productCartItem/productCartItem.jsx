import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getProductById } from '../../../../store/products'
import QuantityInput from '../../../common/quantityInput'
import {
    addToCart,
    minusItemFromCart,
    onChangeCart,
    removeItemFromCart
} from '../../../../store/cart'

const ProductCartItem = ({ productId, amount }) => {
    const dispatch = useDispatch()
    const product = useSelector(getProductById(productId))

    const handleDeleteItem = () => {
        dispatch(removeItemFromCart(productId))
    }

    const handleChange = useCallback((e) => {
        const { value } = e.target
        dispatch(onChangeCart({ id: productId, value: Number(value) }))
    }, [])
    const handleIncrement = () => {
        dispatch(addToCart({ id: productId }))
    }
    const handleDecrement = () => {
        dispatch(minusItemFromCart(productId))
    }

    return (
        <li className="cartProd">
            <div className="cartProd__image">
                <img src={product.thumbnail} alt="item" />
            </div>
            <div className="cartProd__title">{product.title}</div>
            <div className="cartProd__count">
                <QuantityInput
                    value={amount}
                    onChange={handleChange}
                    increment={handleIncrement}
                    decrement={handleDecrement}
                />
            </div>
            <button
                className="cartProd__delete"
                title="delete item"
                onClick={handleDeleteItem}
            >
                <i className="icon-close"></i>
            </button>
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
