import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

const RangeSlider = ({ min, max, onSliderChange, value }) => {
    return (
        <div>
            <Slider
                range
                allowCross={false}
                value={value}
                onChange={onSliderChange}
                min={min}
                max={max}
                // step={100}
            />
            <br />
        </div>
    )
}
RangeSlider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    onSliderChange: PropTypes.func,
    value: PropTypes.array
}

export default RangeSlider
