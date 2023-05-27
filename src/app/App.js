import React, { useEffect } from 'react'
import './App.scss'
import PageRouter from './router/pageRouter'
import { useDispatch } from 'react-redux'
import { loadCategoriesList } from './store/categories'
import { loadProductsList } from './store/products'

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadCategoriesList())
        dispatch(loadProductsList())
    }, [])

    return <PageRouter />
}

export default App
