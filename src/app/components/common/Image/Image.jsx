import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import { useInView } from 'react-intersection-observer'
import loadImage from '../../../utils/loadImage'

const Image = React.memo(({ imgUrl, alt }) => {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    })
    const [src, setSrc] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (inView) {
            const fetchImage = async () => {
                setIsLoading(true)
                const cachedImageUrl = await loadImage(imgUrl)
                setSrc(cachedImageUrl)
                setIsLoading(false)
            }
            fetchImage()
        }
    }, [imgUrl, inView])

    return (
        <div ref={ref} className="image">
            {inView ? (
                isLoading ? (
                    <div className="image__skeleton">
                        <div className="lds-dual-ring"></div>
                    </div>
                ) : (
                    <img src={src} alt={alt} />
                )
            ) : (
                <div className="image__skeleton" />
            )}
        </div>
    )
})
Image.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    alt: PropTypes.string
}

export default Image
