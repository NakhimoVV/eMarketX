import React, { useEffect, useState } from 'react'
import api from '../../../api'

const MainPage = () => {
    const [categories, setCategories] = useState()
    useEffect(() => {
        api.products.getAllCategory().then((data) => setCategories(data))
    }, [])
    return (
        <>
            <h1>Main Page</h1>
            <h2>Слайдер</h2>
            <h2>Популярные категории</h2>
            {categories &&
                categories.map((title) => <p key={title}>{title}</p>)}
        </>
    )
}

export default MainPage
