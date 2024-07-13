import React from 'react'
import FavoritesPage from '../pages/favoritesPage'
import { useSelector } from 'react-redux'
import { getStateFavoriteList } from '../store/favorites'

const Favorites = () => {
    const favoriteListId = useSelector(getStateFavoriteList())
    if (favoriteListId.length === 0) return <h3>Favorites is empty</h3>
    return <FavoritesPage favoriteListId={favoriteListId} />
}

export default Favorites
