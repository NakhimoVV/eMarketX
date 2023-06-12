import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

const QuantityInput = ({ value, onChange, increment, decrement }) => {
    return (
        <div className="quantity">
            <button
                className="quantity__button quantity__button_decrement"
                onClick={decrement}
            >
                –
            </button>
            <input
                className="quantity__input"
                type="number"
                min={0}
                value={value}
                onChange={onChange}
            ></input>
            <button
                className="quantity__button quantity__button_increment"
                onClick={increment}
            >
                +
            </button>
        </div>
    )
}
QuantityInput.propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func,
    increment: PropTypes.func,
    decrement: PropTypes.func
}

export default QuantityInput
