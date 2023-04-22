import React, { useEffect, useState } from 'react'
import api from '../../../api'
import CategoryBox from '../../common/categoryBox'
import './style.scss'

const PopularCategories = () => {
    const [categories, setCategories] = useState()
    useEffect(() => {
        api.categories.fetchAll().then((data) => {
            setCategories(data)
        })
    }, [])

    return (
        <section className="categories">
            <div className="categories__title">Popular categories (All)</div>
            <div className="categories__list">
                {categories &&
                    categories.map((cat) => (
                        <CategoryBox key={cat.id} {...cat} />
                    ))}
            </div>
        </section>
    )
}

export default PopularCategories
