import React from 'react'
import FavoritesPage from '../pages/favoritesPage'
import { useSelector } from 'react-redux'
import { getStateFavoriteList } from '../store/favorites'
import EmptyPage from '../components/common/emptyPage/emptyPage'

const Favorites = () => {
    const favoriteListId = useSelector(getStateFavoriteList())
    if (favoriteListId.length === 0) {
        return <EmptyPage namePage="Favorites" />
    }
    return <FavoritesPage favoriteListId={favoriteListId} />
}

export default Favorites
