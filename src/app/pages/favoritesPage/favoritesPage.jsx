import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import ProductListItem from '../../components/ui/product/productListItem'

const FavoritesPage = ({ favoriteList }) => {
    return (
        <section className="favorites">
            <div className="favorites__title">
                <span>Favorites</span>
                <button className="btn-clean">
                    <i className="icon-close"></i>
                    <span>Clean</span>
                </button>
            </div>
            <div className="favorites__body">
                <ul className="favoriteList">
                    {favoriteList.map((id, index) => (
                        <ProductListItem key={index} product={id} />
                        //сделать listItem для favorites, а это удалить
                    ))}
                </ul>
            </div>
        </section>
    )
}
FavoritesPage.propTypes = {
    favoriteList: PropTypes.array
}

export default FavoritesPage
