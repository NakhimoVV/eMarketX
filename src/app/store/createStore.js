import { combineReducers, configureStore } from '@reduxjs/toolkit'
import productsReducer from './products'
import categoriesReducer from './categories'
import usersReducer from './users'
import cartReducer from './cart'
import taskReducer from './tasks'
import favoritesReducer from './favorites'
import compareReducer from './compare'

const rootReducer = combineReducers({
    products: productsReducer,
    categories: categoriesReducer,
    users: usersReducer,
    cart: cartReducer,
    tasks: taskReducer,
    favorites: favoritesReducer,
    compare: compareReducer
})

export function createStore() {
    return configureStore({
        reducer: rootReducer
    })
}
