import React from 'react'
import PropTypes from 'prop-types'
import RangeSlider from '../rangeSlider'
import SimpleInputField from '../../common/form/simpleInputField'
import './style.scss'

const PriceFilter = ({
    valueMin,
    valueMax,
    onMinChange,
    onMaxChange,
    onSliderChange,
    value
}) => {
    return (
        <div className="price filter__price">
            <div className="price__title">
                <span>Price, $</span>
            </div>
            <div className="price__range">
                <SimpleInputField
                    name="priceMin"
                    value={value[0]}
                    onChange={onMinChange}
                />
                <span>–</span>
                <SimpleInputField
                    name="priceMax"
                    value={value[1]}
                    onChange={onMaxChange}
                />
            </div>
            <RangeSlider
                min={valueMin}
                max={valueMax}
                onSliderChange={onSliderChange}
                value={value}
            />
        </div>
    )
}
PriceFilter.propTypes = {
    valueMin: PropTypes.number.isRequired,
    valueMax: PropTypes.number.isRequired,
    onMinChange: PropTypes.func,
    onMaxChange: PropTypes.func,
    onSliderChange: PropTypes.func,
    value: PropTypes.array
}

export default PriceFilter
