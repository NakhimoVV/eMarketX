import { createSlice } from '@reduxjs/toolkit'
import productService from '../services/product.service'

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null
    },
    reducers: {
        productsRequested: (state) => {
            state.isLoading = true
        },
        productsReceved: (state, action) => {
            state.entities = action.payload
            state.lastFetch = Date.now()
            state.isLoading = false
        },
        productsRequestFailed: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        }
    }
})

const { reducer: productsReducer, actions } = productsSlice
const { productsRequested, productsReceved, productsRequestFailed } = actions

function isOutDated(date) {
    if (Date.now() - date > 10 * 60 * 1000) {
        return true
    }
    return false
}

export const loadProductsList = () => async (dispatch, getState) => {
    const { lastFetch } = getState().products
    if (isOutDated(lastFetch)) {
        dispatch(productsRequested())
        try {
            const { content } = await productService.fetchAll()
            dispatch(productsReceved(content))
        } catch (error) {
            dispatch(productsRequestFailed(error.message))
        }
    }
}

export const getProductsLoadingStatus = () => (state) =>
    state.products.isLoading
export const getProductsByCategory = (catId) => (state) => {
    if (state.products.entities) {
        const products = state.products.entities.filter(
            (prod) => prod.category === catId
        )
        const initialMinMax = [
            Math.min(...products.map((i) => i.price)),
            Math.max(...products.map((i) => i.price))
        ]
        return { products, initialMinMax }
    }
    return []
}
export const getProductById = (id) => (state) =>
    state.products.entities
        ? state.products.entities.find((prod) => prod._id === id)
        : null

export const getAllProducts = () => (state) => state.products.entities

export default productsReducer
