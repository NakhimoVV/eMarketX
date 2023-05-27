import React from 'react'
import PopularCategories from '../components/ui/popularCategories'
// import useMockData from '../utils/mockData'

const MainPage = () => {
    // const { initialize } = useMockData()
    // const handleClick = () => {
    //     initialize()
    // }
    return (
        <>
            <h1>Главная страница</h1>
            {/* <button onClick={handleClick}>Инициализировать</button> */}
            <PopularCategories />
        </>
    )
}

export default MainPage
