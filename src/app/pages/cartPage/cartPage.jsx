import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import ProductCartItem from '../../components/ui/product/productCartItem/productCartItem'

const CartPage = ({ cartList }) => {
    return (
        <section className="cart">
            <div className="cart__title">
                <span>Cart</span>
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
                            <span>15235</span> $
                        </p>
                    </div>
                    <button className="cartTotal__bot checkout-btn btn">
                        checkout
                    </button>
                </div>
            </div>
        </section>
    )
}
CartPage.propTypes = {
    cartList: PropTypes.array
}

export default CartPage