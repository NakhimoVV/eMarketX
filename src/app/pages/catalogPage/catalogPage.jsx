import React from 'react'
import { useSelector } from 'react-redux'
import { getCategories } from '../../store/categories'
import CategoryBox from '../../components/common/categoryBox'
import './style.scss'

const CatalogPage = () => {
    const categories = useSelector(getCategories())
    return (
        <section className="categories">
            <div className="categories__title">All categories</div>
            <div className="categories__list">
                {categories &&
                    categories.map((cat) => (
                        <CategoryBox key={cat._id} {...cat} />
                    ))}
            </div>
        </section>
    )
}

export default CatalogPage
