import React from 'react'
import PropTypes from 'prop-types'

const SimpleInputField = ({
    name,
    value,
    type,
    onChange,
    placeholder,
    className
}) => {
    return (
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            autoComplete="off"
            value={value}
            onChange={onChange}
            className={className}
        />
    )
}
SimpleInputField.defaultProps = {
    type: 'number'
}
SimpleInputField.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string
}
export default SimpleInputField
