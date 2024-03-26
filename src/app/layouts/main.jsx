import React from 'react'
import PopularCategories from '../components/ui/popularCategories'
import { Link } from 'react-router-dom'
import useMockData from '../utils/mockData'

const MainPage = () => {
    // Для инициализации МокДанных в FireBase используем useMockData();
    const { initialize } = useMockData()
    const handleClick = () => {
        initialize()
    }

    return (
        <>
            <Link to="/catalog" className="titleLink">
                All categories
            </Link>
            <button onClick={handleClick}>Инициализировать</button>
            <PopularCategories />
        </>
    )
}

export default MainPage
