import { combineReducers, configureStore } from '@reduxjs/toolkit'
import productsReducer from './products'
import categoriesReducer from './categories'
import usersReducer from './users'
import cartReducer from './cart'

const rootReducer = combineReducers({
    products: productsReducer,
    categories: categoriesReducer,
    users: usersReducer,
    cart: cartReducer
})

export function createStore() {
    return configureStore({
        reducer: rootReducer
    })
}
