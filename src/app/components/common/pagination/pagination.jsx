import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import './style.scss'

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
    const pageCount = Math.ceil(itemsCount / pageSize)
    if (pageCount === 1) {
        return null
    }
    const pages = _.range(1, pageCount + 1)
    return (
        <ul className="pagination">
            {pages.map((page) => (
                <li
                    className={
                        'pagination__item' +
                        (page === currentPage ? ' active' : '')
                    }
                    key={'pagination__' + page}
                >
                    <button
                        className="pagination__link"
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </button>
                </li>
            ))}
        </ul>
    )
}
Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
}
export default Pagination
