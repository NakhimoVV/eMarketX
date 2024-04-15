import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import ProductCartItem from '../../components/ui/product/productCartItem/productCartItem'
import { useDispatch, useSelector } from 'react-redux'
import { fullCleanCart, getTotalPrice } from '../../store/cart'
import { Link } from 'react-router-dom'

const CartPage = ({ cartList }) => {
    const totalPrice = useSelector(getTotalPrice())
    const dispatch = useDispatch()
    return (
        <section className="cart">
            <div className="cart__title">
                <span>Cart</span>
                <button
                    className="btn-clean"
                    onClick={() => dispatch(fullCleanCart())}
                >
                    <i className="icon-close"></i>
                    <span>Clean cart</span>
                </button>
            </div>
            <div className="cart__body">
                <ul className="cartList">
                    {cartList.map((product, indx) => (
                        <ProductCartItem
                            key={indx}
                            productId={product.id}
                            amount={product.count}
                        />
                    ))}
                </ul>
                <div className="cartTotal">
                    <div className="cartTotal__top total">
                        <p className="total__title">Total:</p>
                        <p className="total__value">
                            <span>{totalPrice}</span> $
                        </p>
                    </div>
                    <Link to="/checkout">
                        <button className="cartTotal__bot checkout-btn btn">
                            Proceed to Checkout
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
CartPage.propTypes = {
    cartList: PropTypes.array
}

export default CartPage
