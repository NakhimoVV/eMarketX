import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../api'
import Breadcrumbs from '../../components/common/breadcrumbs'
import CategoryPage from '../categoryPage/categoryPage'
import ProductPage from '../productPage/productPage'

const RootCatalog = () => {
    const [categories, setCategories] = useState()

    useEffect(() => {
        api.categories.fetchAll().then((data) => {
            setCategories(data)
        })
    }, [])

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
                categories.map((cat) => <p key={cat.id}>{cat.title}</p>)
            )}
        </section>
    )
}

export default RootCatalog
