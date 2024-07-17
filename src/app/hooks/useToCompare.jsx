import { useDispatch, useSelector } from 'react-redux'
import { getExistenceProdInCompare, toggleCompare } from '../store/compare'
import { useEffect, useState } from 'react'

export const useToCompare = ({
    _id,
    thumbnail,
    dimensions,
    weight,
    sku,
    brand,
    tags,
    stock,
    rating,
    discountPercentage,
    price,
    category,
    description,
    title
}) => {
    const dispatch = useDispatch()
    const [isCompare, setCompare] = useState(false)
    const isIn = useSelector(getExistenceProdInCompare(_id, category))

    const handleClickOnToCompare = () => {
        dispatch(
            toggleCompare({
                _id,
                thumbnail,
                dimensions,
                weight,
                sku,
                brand,
                tags,
                stock,
                rating,
                discountPercentage,
                price,
                category,
                description,
                title
            })
        )
        setCompare((prevState) => !prevState)
    }

    useEffect(() => {
        isIn ? setCompare(true) : setCompare(false)
    }, [isIn])

    return { isCompare, handleClickOnToCompare }
}
