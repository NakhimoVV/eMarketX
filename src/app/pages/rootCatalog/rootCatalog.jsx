import React from 'react'
import { useParams } from 'react-router-dom'
import CategoryPage from '../categoryPage/categoryPage'
import ProductPage from '../productPage/productPage'
import CatalogPage from '../catalogPage/catalogPage'

const RootCatalog = () => {
    const { categoryId, productId } = useParams()

    return (
        <section>
            {categoryId ? (
                productId ? (
                    <ProductPage productId={productId} />
                ) : (
                    <CategoryPage categoryId={categoryId} />
                )
            ) : (
                <CatalogPage />
            )}
        </section>
    )
}

export default RootCatalog
