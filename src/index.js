import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import reportWebVitals from './reportWebVitals'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import './iconsfont.css'
import { createStore } from './app/store/createStore'
import history from './app/utils/history'

const redux = createStore()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Router history={history}>
        <Provider store={redux}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>
    </Router>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
