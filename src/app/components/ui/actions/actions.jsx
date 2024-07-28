import React from 'react'
import PropTypes from 'prop-types'
import { useFavorites } from '../../../hooks/useFavorites'
import { useToCompare } from '../../../hooks/useToCompare'

const Actions = ({ product, viewType }) => {
    const { isFavorite, handleClickOnFavorite } = useFavorites(product._id)
    const { isCompare, handleClickOnToCompare } = useToCompare(product)

    return (
        <>
            <button
                className={
                    'actions__button_compare ' + (isCompare ? 'active' : '')
                }
                onClick={handleClickOnToCompare}
            >
                <i className="icon-compare"></i>{' '}
                {viewType !== 'vCard' && <span>Compare</span>}
            </button>
            <button
                className={
                    'actions__button_favorite ' + (isFavorite ? 'active' : '')
                }
                onClick={handleClickOnFavorite}
            >
                <i className="icon-heart-empty"></i>{' '}
                {viewType !== 'vCard' && <span>Favorites</span>}
            </button>
        </>
    )
}
Actions.propTypes = {
    product: PropTypes.object.isRequired,
    viewType: PropTypes.string.isRequired
}

export default Actions
