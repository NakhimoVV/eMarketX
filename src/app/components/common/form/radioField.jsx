import React from 'react'
import PropTypes from 'prop-types'

const RadioField = ({ options, name, onChange, value, label }) => {
    return (
        <>
            <label className="label-text">{label}</label>
            <div>
                {options.map((option) => (
                    <div
                        key={option.name + '_' + option.value}
                        className="radio-inline"
                    >
                        <input
                            className="radio-input"
                            type="radio"
                            name={name}
                            id={option.name + '_' + option.value}
                            checked={option.value === value}
                            value={option.value}
                            onChange={onChange}
                        />
                        <label
                            className="radio-label"
                            htmlFor={option.name + '_' + option.value}
                        >
                            {option.name}
                        </label>
                    </div>
                ))}
            </div>
        </>
    )
}
RadioField.propTypes = {
    options: PropTypes.array,
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    label: PropTypes.string
}
export default RadioField
