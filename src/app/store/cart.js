import { createSlice } from '@reduxjs/toolkit'
// import localStorageService from '../services/localStorage.service'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        totalPrice: 0,
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
            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price * obj.count + sum
            }, 0)
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((obj) => obj.id !== action.payload)
        },
        cleanCart: (state) => {
            state.items = []
            state.quantity = 0
            state.totalPrice = 0
        },
        onChange: (state, action) => {
            const findItem = state.items.find(
                (obj) => obj.id === action.payload.id
            )
            if (findItem) {
                findItem.count = action.payload.value
            }
            state.quantity = state.items.reduce(
                (sum, obj) => obj.count + sum,
                0
            )
        },
        minusOne: (state, action) => {
            const findItem = state.items.find(
                (obj) => obj.id === action.payload
            )
            if (findItem) {
                findItem.count > 1
                    ? findItem.count--
                    : (state.items = state.items.filter(
                          (obj) => obj.id !== action.payload
                      ))
            }
            state.quantity = state.items.reduce(
                (sum, obj) => obj.count + sum,
                0
            )
            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price * obj.count + sum
            }, 0)
        }
    }
})

const { reducer: cartReducer, actions } = cartSlice
const { addItem, onChange, minusOne, removeItem } = actions

export const addToCart = (productId) => (dispatch) => {
    // localStorageService.addToLocalCart(product)
    dispatch(addItem(productId))
}

export const onChangeCart = (payload) => (dispatch) => {
    dispatch(onChange(payload))
}
export const minusItemFromCart = (productId) => (dispatch) => {
    dispatch(minusOne(productId))
}
export const removeItemFromCart = (productId) => (dispatch) => {
    dispatch(removeItem(productId))
}

export const getCartList = () => (state) => state.cart.items
export const getTotalPrice = () => (state) => state.cart.totalPrice
export const getCoutItemById = (id) => (state) =>
    state.cart.items.find((obj) => obj.id === id)

export default cartReducer
