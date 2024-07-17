import React from 'react'
import CompareGrid from './compareGrid'
const CompareCategory = () => {
    //принимает массив продуктов опредлеленной категории
    return (
        <div className="compare__category">
            <div>
                <h3 className="title">{titleCategory}</h3>
                <CompareGrid />
            </div>
        </div>
    )
}

export default CompareCategory
