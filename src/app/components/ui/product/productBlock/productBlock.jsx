import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import ProductCard from '../productCard'
import ProductListItem from '../productListItem'

const ProductBlock = ({ products, viewType }) => {
    return (
        <ul className={'products-' + viewType}>
            {products.map((product) =>
                viewType === 'vList' ? (
                    <ProductListItem
                        key={product._id}
                        product={product}
                        viewType={viewType}
                    />
                ) : (
                    <ProductCard
                        key={product._id}
                        product={product}
                        viewType={viewType}
                    />
                )
            )}
        </ul>
    )
}
ProductBlock.propTypes = {
    products: PropTypes.array,
    viewType: PropTypes.string
}

export default ProductBlock
