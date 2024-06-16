import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleFavorite } from '../store/favorites'

export const useFavorites = (productId) => {
    const dispatch = useDispatch()
    const [isFavorite, setFavorite] = useState(false)

    const handleClickOnFavorite = () => {
        dispatch(toggleFavorite(productId))
        setFavorite((prevState) => !prevState)
    }

    return { isFavorite, handleClickOnFavorite }
}
