import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    getProductsLoadingStatus,
    loadProductsList
} from '../../../store/products'
import { loadCategoriesList } from '../../../store/categories'

const AppLoader = ({ children }) => {
    const dispatch = useDispatch()
    const productsStatusLoading = useSelector(getProductsLoadingStatus())

    useEffect(() => {
        dispatch(loadCategoriesList())
        dispatch(loadProductsList())
    }, [])
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
