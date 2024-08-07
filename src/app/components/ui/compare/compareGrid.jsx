import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import { useDispatch } from 'react-redux'
import { removeItemCompare } from '../../../store/compare'

const CompareGridItem = ({ product }) => {
    const dispatch = useDispatch()
    const { category, _id } = product
    return (
        <>
            <div className="column-data__thumbnail">
                <img src={product.thumbnail} alt="thumbnail" />
                <button
                    className="btn-clean"
                    onClick={() =>
                        dispatch(removeItemCompare({ category, _id }))
                    }
                >
                    <i className="icon-close"></i>
                </button>
            </div>
            <div className="column-data__title">{product.title}</div>
            <div className="column-data__price">{product.price}</div>
            <div className="column-data__brand">{product?.brand}</div>
            <div className="column-data__rating">{product.rating}</div>
            <div className="column-data__tags">
                {product.tags.map((tag, index) => (
                    <span key={index}>{tag} </span>
                ))}
            </div>
            <div className="column-data__weight">{product.weight}</div>
            <div className="column-data__dimensions">
                <div className="width">
                    <span>width: </span>
                    {product.dimensions.width}
                </div>
                <div className="height">
                    <span>height: </span>
                    {product.dimensions.height}
                </div>
                <div className="depth">
                    <span>depth: </span>
                    {product.dimensions.depth}
                </div>
            </div>
            <div className="column-data__stock">{product.stock}</div>
            <div className="column-data__description">
                {product.description}
            </div>
        </>
    )
}
CompareGridItem.propTypes = {
    product: PropTypes.object
}
export default CompareGridItem
