import React, { useMemo } from 'react'
import { createPortal } from 'react-dom'

const Portal = ({ children }) => {
    // const element = document.createElement('div')
    const element = useMemo(() => {
        const element = document.createElement('div')
        element.className = 'popup'
        return element
    }, [])
    useEffect(() => {
        document.body.appendChild(element)
        return () => {
            document.body.removeChild(element)
        }
    }, [])

    return createPortal(children, element)
}

export default Portal
