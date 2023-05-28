import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './style.scss'
import { calcPrice } from '../../utils/calcPrice'
import PriceFilter from '../../components/ui/priceFilter'
import _ from 'lodash'
import SortBlock from '../../components/ui/sortBlock'
import Pagination from '../../components/common/pagination/pagination'
import { paginate } from '../../utils/paginate'
import { useSelector } from 'react-redux'
import { getProductsByCategory } from '../../store/products'
import { getCategoryNameById } from '../../store/categories'

const CategoryPage = ({ categoryId }) => {
    const categoryTitle = useSelector(getCategoryNameById(categoryId))
    const { products, initialMinMax } = useSelector(
        getProductsByCategory(categoryId)
    )
    const [priceRange, setPriceRange] = useState(initialMinMax)
    const [sortBy, setSortBy] = useState({ path: 'rating', order: 'desc' })
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 4

    const handleMinChange = ({ target }) => {
        setPriceRange((prevState) => [+target.value, prevState[1]])
    }
    const handleMaxChange = ({ target }) => {
        setPriceRange((prevState) => [prevState[0], +target.value])
    }
    const handleSliderChange = (value) => {
        setPriceRange(value)
    }
    const handleSort = (itemObj) => {
        setSortBy(itemObj)
    }
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    if (products && initialMinMax) {
        const filteredProducts =
            priceRange !== initialMinMax
                ? products.filter(
                      (item) =>
                          item.price >= priceRange[0] &&
                          item.price <= priceRange[1]
                  )
                : products
        const count = filteredProducts.length
        const sortedProducts = _.orderBy(
            filteredProducts,
            [sortBy.path],
            [sortBy.order]
        )
        const productCrop = paginate(sortedProducts, currentPage, pageSize)
        const cleanFilter = () => {
            setPriceRange(initialMinMax)
        }
        return (
            <div className="categoryPage">
                <div className="titleCat categoryPage__title">
                    <h1 className="titleCat__title">{categoryTitle}</h1>
                    <div className="titleCat__quantity">
                        {products.length} items
                    </div>
                </div>
                <div className="bodyCat categoryPage__body">
                    <div className="bodyCat__list">
                        <SortBlock onSort={handleSort} selectedSort={sortBy} />
                        <ul className="productsList">
                            {productCrop.map((product) => (
                                <li
                                    className="product productsList__product"
                                    key={product._id}
                                >
                                    <div className="product__image">
                                        <img
                                            src={product.images[0]}
                                            alt="product"
                                        />
                                    </div>
                                    <Link
                                        className="product__title"
                                        to={`${categoryId}/${product._id}`}
                                    >
                                        {product.title}
                                    </Link>
                                    <div className="product__info">
                                        <p>
                                            rating :{' '}
                                            <span>{product.rating}</span>
                                        </p>
                                        <p>
                                            stock : <span>{product.stock}</span>
                                        </p>
                                        <p>
                                            item id : <span>{product._id}</span>
                                        </p>
                                    </div>
                                    <div className="product__actions actions">
                                        <button className="actions__button_compare">
                                            <i className="icon-compare"></i>{' '}
                                            <span>Compare</span>
                                        </button>
                                        <button className="actions__button_favorite">
                                            <i className="icon-heart-empty"></i>{' '}
                                            <span>Favorites</span>
                                        </button>
                                    </div>
                                    <div className="product__buy">
                                        <div className="product__price">
                                            <p>
                                                {calcPrice(
                                                    product.price,
                                                    product.discountPercentage
                                                )}
                                            </p>
                                            <p>
                                                <span>{product.price}</span> $
                                            </p>
                                        </div>
                                        <button className="product__button_toCart btn">
                                            <i className="icon-to-cart"></i>{' '}
                                            <span>To cart</span>
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <nav className="bodyCat__pagination">
                            <Pagination
                                itemsCount={count}
                                pageSize={pageSize}
                                currentPage={currentPage}
                                onPageChange={handlePageChange}
                            />
                        </nav>
                    </div>
                    <div className="bodyCat__filter">
                        <div className="filter">
                            <div className="filter__title">Filter</div>
                            <PriceFilter
                                valueMin={initialMinMax[0]}
                                valueMax={initialMinMax[1]}
                                onMinChange={handleMinChange}
                                onMaxChange={handleMaxChange}
                                onSliderChange={handleSliderChange}
                                value={priceRange}
                            />
                            <button
                                className="filter__button_clear btn"
                                onClick={cleanFilter}
                            >
                                Clean filter
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return <h2>Loading...</h2>
    }
}
CategoryPage.propTypes = {
    categoryId: PropTypes.string
}

export default CategoryPage
