import React from 'react'
import PropTypes from 'prop-types'

const CheckBoxField = ({ name, value, onChange, children, error }) => {
    const handleChange = () => {
        const fakeEvent = {
            target: {
                name,
                value: !value
            }
        }
        onChange(fakeEvent)
    }
    const getInputClasses = () => 'check-input' + (error ? ' is-invalid' : '')

    return (
        <div className="input-group">
            <input
                className={getInputClasses()}
                type="checkbox"
                value=""
                id={name}
                onChange={handleChange}
                checked={value}
            />
            <label className="check-label" htmlFor={name}>
                {children}
            </label>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    )
}

CheckBoxField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    error: PropTypes.string
}

export default CheckBoxField
