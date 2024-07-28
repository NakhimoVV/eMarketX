import React from 'react'
import PropTypes from 'prop-types'
import CompareGridItem from './compareGrid'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryNameById } from '../../../store/categories'
import './style.scss'
import { cleanCompareCategory } from '../../../store/compare'

const CompareCategory = ({ categoryId, categoryArray }) => {
    const categoryTitle = useSelector(getCategoryNameById(categoryId))
    const dispatch = useDispatch()

    return (
        <div className="compare__category ">
            <h3 className="compare__title">
                {categoryTitle}{' '}
                <button
                    className="btn-clean"
                    onClick={() => dispatch(cleanCompareCategory(categoryId))}
                >
                    <i className="icon-close"></i>
                    <span>Clean</span>
                </button>
            </h3>
            <ul
                className="compare__grid grid"
                style={{
                    overflowX: categoryArray.length > 6 ? 'auto' : 'visible'
                }}
            >
                <p>Price</p>
                <p>Brand</p>
                <p>Rating</p>
                <p>Tags</p>
                <p>Weight</p>
                <p>Dimensions</p>
                <p>Stock</p>
                <p>Description</p>
                {categoryArray.map((item) => (
                    <CompareGridItem product={item} key={item._id} />
                ))}
            </ul>
        </div>
    )
}
CompareCategory.propTypes = {
    categoryId: PropTypes.string.isRequired,
    categoryArray: PropTypes.array.isRequired
}
export default CompareCategory
