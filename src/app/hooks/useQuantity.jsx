import { useState } from 'react'

export const useQuantity = (initial) => {
    const [quantity, setQuantity] = useState(initial)
    const handleIncrement = () => setQuantity((prevState) => prevState + 1)
    const handleDecrement = () => {
        setQuantity((prevState) => (prevState > 0 ? prevState - 1 : prevState))
    }
    const handleChange = ({ target }) => {
        setQuantity(+target.value)
    }
    return {
        quantity,
        handleIncrement,
        handleDecrement,
        handleChange,
        setQuantity
    }
}
