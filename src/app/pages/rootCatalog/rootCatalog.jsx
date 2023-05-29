import React from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../../components/common/breadcrumbs'
import CategoryPage from '../categoryPage/categoryPage'
import ProductPage from '../productPage/productPage'
import { useSelector } from 'react-redux'
import { getCategories } from '../../store/categories'

const RootCatalog = () => {
    const categories = useSelector(getCategories())

    const { categoryId, productId } = useParams()

    return (
        <section>
            <Breadcrumbs />
            {categoryId ? (
                productId ? (
                    <ProductPage productId={productId} />
                ) : (
                    <CategoryPage categoryId={categoryId} />
                )
            ) : (
                categories &&
                categories.map((cat) => <p key={cat._id}>{cat.title}</p>)
            )}
        </section>
    )
}

export default RootCatalog
