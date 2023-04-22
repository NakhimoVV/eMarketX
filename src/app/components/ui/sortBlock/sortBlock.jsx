import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

const SortBlock = ({ onSort, selectedSort }) => {
    const sortLabels = [
        { path: 'price', label: 'price' },
        { path: 'rating', label: 'rating' },
        { path: 'discountPercentage', label: 'discount' }
    ]

    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === 'asc' ? 'desc' : 'asc'
            })
        } else {
            onSort({ path: item, order: 'asc' })
        }
    }
    const checkOrder = () => {
        if (selectedSort.order === 'asc') {
            return 'active icon-long-arrow-down'
        } else if (selectedSort.order === 'desc') {
            return 'active icon-long-arrow-up'
        }
        return undefined
    }

    return (
        <div className="sortBlock">
            <div className="sortBlock__title">
                <span>Sort by</span>
            </div>
            <div className="sort sortBlock__sort">
                {sortLabels.map((item) => (
                    <div
                        key={item.label}
                        onClick={() => handleSort(item.path)}
                        className={
                            'sort__item ' +
                            (item.path === selectedSort.path
                                ? checkOrder()
                                : undefined)
                        }
                        role="button"
                    >
                        <span>{item.label}</span>
                    </div>
                ))}
            </div>
            <div className="view sortBlock__view">
                <div className="view__list">
                    <i className="icon-list"></i>
                </div>
                <div className="view__tile">
                    <i className="icon-tile"></i>
                </div>
            </div>
        </div>
    )
}
SortBlock.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired
}

export default SortBlock
