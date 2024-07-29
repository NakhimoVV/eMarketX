import React from 'react'
import { useSelector } from 'react-redux'
import { getCompareList } from '../store/compare'
import ComparePage from '../pages/comparePage/comparePage'
import EmptyPage from '../components/common/emptyPage/emptyPage'

const Compare = () => {
    const compareList = useSelector(getCompareList())
    if (!Object.keys(compareList).length) {
        return <EmptyPage namePage="Compare" />
    }
    return <ComparePage list={compareList} />
}

export default Compare
