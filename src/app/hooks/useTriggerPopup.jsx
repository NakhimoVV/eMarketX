import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'

const PopupContext = React.createContext()

export const useTriggerPopup = () => {
    return useContext(PopupContext)
}

export const PopupProvider = ({ children }) => {
    const [openPopup, setOpenPopup] = useState(false)

    return (
        <PopupContext.Provider value={{ openPopup, setOpenPopup }}>
            {children}
        </PopupContext.Provider>
    )
}
PopupProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}
