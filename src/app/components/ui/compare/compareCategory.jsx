import React from 'react'
import PropTypes from 'prop-types'
import CompareGridItem from './compareGrid'
import { useSelector } from 'react-redux'
import { getCategoryNameById } from '../../../store/categories'

const CompareCategory = ({ categoryId, categoryArray }) => {
    const categoryTitle = useSelector(getCategoryNameById(categoryId))
    return (
        <div className="compare__category ">
            <h3 className="compare__title">{categoryTitle}</h3>
            <ul className="compare__grid grid">
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
