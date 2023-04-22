import React, { useEffect, useState } from 'react'
import api from '../../api'

const AllProducts = () => {
    const [products, setProducts] = useState()
    useEffect(() => {
        api.products.fetchAll().then((data) => {
            setProducts(data)
        })
    }, [])
    if (products) {
        return (
            <>
                <h1>Каталог</h1>
                <div>
                    {products &&
                        products.map((product) => (
                            <div key={product.id}>{product.category.title}</div>
                        ))}
                </div>
            </>
        )
    }
    return <h2>Loading...</h2>
}

export default AllProducts
