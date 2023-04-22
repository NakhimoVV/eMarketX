import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TextField = ({ label, type, name, value, onChange, error }) => {
    const [showPassword, setShowPassword] = useState(false)

    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState)
    }

    const getInputClasses = () => 'field-input' + (error ? ' is-invalid' : '')

    return (
        <>
            <label htmlFor={name} className="label-text">
                {label}
            </label>
            <div className="input-group has-validation">
                <input
                    type={showPassword ? 'text' : type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={getInputClasses()}
                />
                {type === 'password' && (
                    <button
                        type="button"
                        className="btn-eye"
                        onClick={toggleShowPassword}
                    >
                        <i
                            className={
                                'icon-eye' + (showPassword ? '-closed' : '')
                            }
                        ></i>
                    </button>
                )}
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </>
    )
}
TextField.defaultValues = {
    type: 'text'
}
TextField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
}

export default TextField
