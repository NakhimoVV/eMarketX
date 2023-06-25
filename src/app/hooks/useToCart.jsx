import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, getCoutItemById } from '../store/cart'
import PropTypes from 'prop-types'

export const useToCart = (productId, productPrice) => {
    const dispatch = useDispatch()
    const [isDisabled, setDisabled] = useState(false)
    const cartItem = useSelector(getCoutItemById(productId))
    const addedCount = cartItem ? cartItem.count : 0

    const handleClickOnToCart = () => {
        dispatch(addToCart({ id: productId, price: productPrice }))
        setDisabled(true)
    }

    useEffect(() => {
        addedCount > 0 ? setDisabled(true) : setDisabled(false)
    }, [addedCount])

    return { isDisabled, handleClickOnToCart, addedCount }
}
useToCart.propTypes = {
    productId: PropTypes.string.isRequired,
    productPrice: PropTypes.number.isRequired
}
