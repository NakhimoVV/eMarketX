import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getExistenceItemById, toggleFavorite } from '../store/favorites'

export const useFavorites = (productId) => {
    const dispatch = useDispatch()
    const [isFavorite, setFavorite] = useState(false)
    const isIn = useSelector(getExistenceItemById(productId))

    const handleClickOnFavorite = () => {
        dispatch(toggleFavorite(productId))
        setFavorite((prevState) => !prevState)
    }

    useEffect(() => {
        isIn ? setFavorite(true) : setFavorite(false)
    }, [isIn])

    return { isFavorite, handleClickOnFavorite }
}
