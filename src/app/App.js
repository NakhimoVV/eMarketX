import React from 'react'
import './App.scss'
import PageRouter from './router/pageRouter'
import AppLoader from './components/ui/hoc/appLoader'

function App() {
    return (
        <AppLoader>
            <PageRouter />
        </AppLoader>
    )
}

export default App
