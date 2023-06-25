import React from 'react'
import { useSelector } from 'react-redux'
import { getCartList } from '../store/cart'
import CartPage from '../pages/cartPage'

const Cart = () => {
    const cartList = useSelector(getCartList())
    if (cartList.length === 0) return <h3>Cart is empty</h3>
    return <CartPage cartList={cartList} />
}

export default Cart
