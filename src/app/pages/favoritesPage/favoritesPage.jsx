import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import ProductListItem from '../../components/ui/product/productListItem'
import { getProductById } from '../../store/products'
import { useDispatch, useSelector } from 'react-redux'
import { fullCleanFavoriteList } from '../../store/favorites'

const FavoritesPage = ({ favoriteListId }) => {
    const favoriteProducts = useSelector((state) =>
        favoriteListId.map((productId) => getProductById(productId)(state))
    )
    const dispatch = useDispatch()

    return (
        <section className="favorites">
            <div className="favorites__title">
                <span>Favorites</span>
                <button
                    className="btn-clean"
                    onClick={() => dispatch(fullCleanFavoriteList())}
                >
                    <i className="icon-close"></i>
                    <span>Clean</span>
                </button>
            </div>
            <div className="favorites__body">
                <ul className="favoriteList">
                    {favoriteProducts.map((product, index) => (
                        <ProductListItem key={index} product={product} />
                    ))}
                </ul>
            </div>
        </section>
    )
}
FavoritesPage.propTypes = {
    favoriteListId: PropTypes.array
}

export default FavoritesPage
