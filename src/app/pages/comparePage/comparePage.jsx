import React from 'react'
import PropTypes from 'prop-types'
import CompareCategory from '../../components/ui/compare/compareCategory'

const ComparePage = ({ list }) => {
    return (
        <section className="compare">
            <div className="compare__body">
                {Object.entries(list).map(([key, value]) => (
                    <CompareCategory
                        key={key}
                        categoryId={key}
                        categoryArray={value}
                    />
                ))}
            </div>
        </section>
    )
}
ComparePage.propTypes = {
    list: PropTypes.object
}
export default ComparePage
