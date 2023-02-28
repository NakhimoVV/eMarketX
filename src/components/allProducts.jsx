import React, { useEffect, useState } from 'react'

const AllProducts = () => {
    const [products, setProducts] = useState()
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((json) => setProducts(json.products))
    }, [])

    return (
        <>
            <h1>Каталог</h1>
            <div>
                {products &&
                    products.map((product) => (
                        <div key={product.id}>{product.category}</div>
                    ))}
            </div>
        </>
    )
}

export default AllProducts
