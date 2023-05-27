import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

const ModalWindow = ({ active, setActive, children }) => {
    const onClose = () => setActive(false)
    return (
        <>
            {active && (
                <div className={active ? 'modal active' : 'modal'}>
                    <div className="modal__wrapper" onClick={onClose}>
                        <div
                            className="modal__body"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="modal__close" onClick={onClose}>
                                <i className="icon-close"></i>
                            </button>
                            <div className="modal__content">{children}</div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
ModalWindow.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    active: PropTypes.bool,
    setActive: PropTypes.func
}

export default ModalWindow
