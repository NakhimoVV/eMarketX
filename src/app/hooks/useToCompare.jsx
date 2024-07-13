import { useDispatch } from 'react-redux'
import { addToCompare } from '../store/compare'

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
    const handleClickOnToCompare = () => {
        dispatch(
            addToCompare({
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
    }

    return { handleClickOnToCompare }
}
