import React from 'react'
import FavoritesPage from '../pages/favoritesPage'
import { useSelector } from 'react-redux'
import { getFavoriteList } from '../store/favorites'

const Favorites = () => {
    const favoriteList = useSelector(getFavoriteList())
    if (favoriteList.length === 0) return <h3>Favorites is empty</h3>
    return <FavoritesPage favoriteList={favoriteList} />
}

export default Favorites
