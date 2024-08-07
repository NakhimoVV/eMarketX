import React from 'react'
import { useSelector } from 'react-redux'
import { getCartList } from '../store/cart'
import CartPage from '../pages/cartPage'
import EmptyPage from '../components/common/emptyPage/emptyPage'

const Cart = () => {
    const cartList = useSelector(getCartList())
    if (cartList.length === 0) return <EmptyPage namePage="Cart" />
    return <CartPage cartList={cartList} />
}

export default Cart
