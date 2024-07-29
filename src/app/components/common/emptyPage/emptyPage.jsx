import React from 'react'
import PropTypes from 'prop-types'

const EmptyPage = ({ namePage }) => {
    return (
        <div className="emptyPage">
            <img src="/assets/images/ooops.png" alt="page is empty" />
            <h3 className="title">{namePage} is empty</h3>
        </div>
    )
}
EmptyPage.propTypes = {
    namePage: PropTypes.string.isRequired
}

export default EmptyPage
