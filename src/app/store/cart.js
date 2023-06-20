import { createSlice } from '@reduxjs/toolkit'
// import localStorageService from '../services/localStorage.service'

// const arr = [{ id: 3213, count: 3 }]

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        quantity: 0,
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            const findItem = state.items.find(
                (obj) => obj.id === action.payload.id
            )
            if (findItem) {
                findItem.count++
            } else {
                state.items.push({ ...action.payload, count: 1 })
            }
            state.quantity = state.items.reduce(
                (sum, obj) => obj.count + sum,
                0
            )
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(
                (obj) => obj.id !== action.payload.id
            )
        },
        cleanCart: (state) => {
            state.items = []
            state.quantity = 0
        }
    }
})

const { reducer: cartReducer, actions } = cartSlice
const { addItem } = actions

export const addToCart = (product) => (dispatch) => {
    // localStorageService.addToLocalCart(product)
    dispatch(addItem(product))
}

export const getCartList = () => (state) => state.cart.items

export default cartReducer
