import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import ProductCard from '../productCard'
import ProductListItem from '../productListItem'

const ProductBlock = ({ products, categoryId, viewType }) => {
    return (
        <ul className={'products-' + viewType}>
            {products.map((product) =>
                viewType === 'vList' ? (
                    <ProductListItem
                        key={product._id}
                        product={product}
                        categoryId={categoryId}
                    />
                ) : (
                    <ProductCard
                        key={product._id}
                        product={product}
                        categoryId={categoryId}
                    />
                )
            )}
        </ul>
    )
}
ProductBlock.propTypes = {
    products: PropTypes.array,
    categoryId: PropTypes.string,
    viewType: PropTypes.string
}

export default ProductBlock
