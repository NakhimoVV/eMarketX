import React from 'react'
import { useSelector } from 'react-redux'
import { getAllProducts } from '../../store/products'
import ProductListItem from '../../components/ui/product/productListItem'
import { useSearch } from '../../hooks/useSearch'

const SearchPage = () => {
    const { searchQuery } = useSearch()
    const allProducts = useSelector(getAllProducts())
    const foundProducts = allProducts.filter(
        (prod) =>
            prod.title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
    )
    return (
        <section className="searchPage">
            <ul className="searchList">
                {foundProducts.map((product) => (
                    <ProductListItem key={product._id} product={product} />
                ))}
            </ul>
        </section>
    )
}

export default SearchPage
