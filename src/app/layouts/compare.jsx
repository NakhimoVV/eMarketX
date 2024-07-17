import React from 'react'
import { useSelector } from 'react-redux'
import { getCompareList } from '../store/compare'
import ComparePage from '../pages/comparePage/comparePage'

const Compare = () => {
    const compareList = useSelector(getCompareList())
    if (!Object.keys(compareList).length) return <h3>Compare is empty</h3>
    return <ComparePage list={compareList} />
}

export default Compare
