import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import ProductListItem from '../../components/ui/product/productListItem'
import { getProductById } from '../../store/products'
import { useSelector } from 'react-redux'

const FavoritesPage = ({ favoriteListId }) => {
    const favoriteProducts = useSelector((state) =>
        favoriteListId.map((productId) => getProductById(productId)(state))
    )
    return (
        <section className="favorites">
            <div className="favorites__title">
                <span>Favorites</span>
                <button className="btn-clean">
                    {/* Зачистка фейворитс */}
                    {/* onClick={() => dispatch(fullCleanCart())} */}
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
