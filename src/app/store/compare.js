import { createSlice } from '@reduxjs/toolkit'
const _ = require('lodash')

const compareSlice = createSlice({
    name: 'compare',
    initialState: {
        entities: {}
    },
    reducers: {
        toggleProduct: (state, action) => {
            const keyCategory = action.payload.category
            const isCategory = Object.keys(state.entities).find(
                (i) => i === keyCategory
            )
            if (isCategory) {
                const isLastItem = state.entities[keyCategory].findIndex((i) =>
                    _.isEqual(i, action.payload)
                )
                if (isLastItem === -1) {
                    state.entities[keyCategory].push(action.payload)
                } else if (isLastItem === 0) {
                    delete state.entities[keyCategory]
                } else {
                    state.entities[keyCategory] = state.entities[
                        keyCategory
                    ].filter((item, index) => index !== isLastItem)
                }
            } else {
                state.entities[keyCategory] = [action.payload]
            }
        },
        cleanCategory: (state, action) => {
            if (action.payload) {
                delete state.entities[action.payload]
            }
        },
        deleteItem: (state, action) => {
            const key = action.payload.category
            const itemId = action.payload._id
            if (key) {
                const isLastItem = state.entities[key].length
                if (isLastItem > 1) {
                    state.entities[key] = state.entities[key].filter(
                        (item) => item._id !== itemId
                    )
                } else {
                    delete state.entities[key]
                }
            }
        }
    }
})

const { reducer: compareReducer, actions } = compareSlice
const { toggleProduct, cleanCategory, deleteItem } = actions

export const toggleCompare = (payload) => (dispatch) => {
    dispatch(toggleProduct(payload))
}
export const cleanCompareCategory = (payload) => (dispatch) => {
    dispatch(cleanCategory(payload))
}
export const removeItemCompare = (payload) => (dispatch) => {
    console.log(payload)
    dispatch(deleteItem(payload))
}

export const getCompareList = () => (state) => state.compare.entities
export const getExistenceProdInCompare = (id, categoryId) => (state) =>
    state.compare.entities[categoryId]?.find((item) => item._id === id)

export default compareReducer
