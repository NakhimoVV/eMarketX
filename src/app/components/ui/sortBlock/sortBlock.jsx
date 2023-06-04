import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

const SortBlock = ({ onSort, selectedSort, onChange, viewType }) => {
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
                <button
                    className={
                        'view__list' + (viewType === 'vList' ? ' active' : '')
                    }
                    onClick={() => onChange('vList')}
                >
                    <i className="icon-list"></i>
                </button>
                <button
                    className={
                        'view__tile' + (viewType === 'vCard' ? ' active' : '')
                    }
                    onClick={() => onChange('vCard')}
                >
                    <i className="icon-tile"></i>
                </button>
            </div>
        </div>
    )
}
SortBlock.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onChange: PropTypes.func,
    viewType: PropTypes.string
}

export default SortBlock
