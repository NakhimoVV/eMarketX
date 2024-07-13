import { createSlice } from '@reduxjs/toolkit'

const compareSlice = createSlice({
    name: 'compare',
    initialState: {
        entities: []
    },
    reducers: {
        addProduct: (state, action) => {
            state.entities.push(action.payload)
        }
    }
})

const { reducer: compareReducer, actions } = compareSlice
const { addProduct } = actions

export const addToCompare = (payload) => (dispatch) => {
    dispatch(addProduct(payload))
}

export const getCompareList = () => (state) => state.compare.entities

export default compareReducer
