import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import PriceFilter from '../../components/ui/priceFilter'
import _ from 'lodash'
import SortBlock from '../../components/ui/sortBlock'
import Pagination from '../../components/common/pagination/pagination'
import { paginate } from '../../utils/paginate'
import { useSelector } from 'react-redux'
import { getProductsByCategory } from '../../store/products'
import { getCategoryNameById } from '../../store/categories'
import ProductBlock from '../../components/ui/product/productBlock'
import localStorageService from '../../services/localStorage.service'

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

    const [viewType, setViewType] = useState(
        localStorageService.getView() || 'vList'
    )
    const changeView = (value) => {
        setViewType(value)
        localStorageService.setView(value)
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
                        <SortBlock
                            onSort={handleSort}
                            selectedSort={sortBy}
                            onChange={changeView}
                            viewType={viewType}
                        />
                        <ProductBlock
                            products={productCrop}
                            categoryId={categoryId}
                            viewType={viewType}
                        />
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
