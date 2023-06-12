import { createSlice } from '@reduxjs/toolkit'

// const arr = [{ id: 3213, count: 3 }]

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        entities: []
    },
    reducers: {
        add: (state, action) => {
            state.entities.push(action.payload)
        }
    }
})

const { reducer: cartReducer, actions } = cartSlice
const { add } = actions

export const addToCart = (product) => (dispatch) => {
    dispatch(add(product))
}

export const getCartList = () => (state) => state.cart.entities

export default cartReducer
