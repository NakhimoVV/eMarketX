import { combineReducers, configureStore } from '@reduxjs/toolkit'
import productsReducer from './products'
import categoriesReducer from './categories'
import usersReducer from './users'

const rootReducer = combineReducers({
    products: productsReducer,
    categories: categoriesReducer,
    users: usersReducer
})

export function createStore() {
    return configureStore({
        reducer: rootReducer
    })
}
