import React from 'react'
// import api from '../../../api'
import CategoryBox from '../../common/categoryBox'
import './style.scss'
import { useSelector } from 'react-redux'
import { getPopularCategories } from '../../../store/categories'

const PopularCategories = () => {
    // const [categories, setCategories] = useState()
    // useEffect(() => {
    //     api.categories.fetchAll().then((data) => {
    //         setCategories(data)
    //     })
    // }, [])
    const categories = useSelector(getPopularCategories(6))

    return (
        <section className="categories">
            <div className="categories__title">Popular categories (All)</div>
            <div className="categories__list">
                {categories &&
                    categories.map((cat) => (
                        <CategoryBox key={cat._id} {...cat} />
                    ))}
            </div>
        </section>
    )
}

export default PopularCategories
