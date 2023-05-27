import React from 'react'
import Portal from '../../common/portal'
import ModalWindow from '../../common/modalWindow'
import { useTriggerPopup } from '../../../hooks/useTriggerPopup'

const withPopup = (Component) => (props) => {
    const { openPopup, setOpenPopup } = useTriggerPopup()

    if (openPopup) {
        return (
            <Portal>
                <ModalWindow active={openPopup} setActive={setOpenPopup}>
                    <Component {...props} />
                </ModalWindow>
            </Portal>
        )
    }
}

export default withPopup
