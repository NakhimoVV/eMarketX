import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    getProductsLoadingStatus,
    loadProductsList
} from '../../../store/products'
import { loadCategoriesList } from '../../../store/categories'
import { getIsLoggedIn, loadCurrentUser } from '../../../store/users'

const AppLoader = ({ children }) => {
    const dispatch = useDispatch()
    const productsStatusLoading = useSelector(getProductsLoadingStatus())
    const isLoggedIn = useSelector(getIsLoggedIn())

    useEffect(() => {
        dispatch(loadCategoriesList())
        dispatch(loadProductsList())
        if (isLoggedIn) {
            dispatch(loadCurrentUser())
        }
    }, [isLoggedIn])
    if (productsStatusLoading) return 'Loading...'
    return children
}
AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default AppLoader
