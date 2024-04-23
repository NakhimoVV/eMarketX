import { createSlice } from '@reduxjs/toolkit'
import categoryService from '../services/category.service'

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null
    },
    reducers: {
        categoriesRequested: (state) => {
            state.isLoading = true
        },
        categoriesReceved: (state, action) => {
            state.entities = action.payload
            state.lastFetch = Date.now()
            state.isLoading = false
        },
        categoriesRequestFailed: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        }
    }
})

const { reducer: categoriesReducer, actions } = categoriesSlice
const { categoriesRequested, categoriesReceved, categoriesRequestFailed } =
    actions

function isOutDated(date) {
    if (Date.now() - date > 10 * 60 * 1000) {
        return true
    }
    return false
}

export const loadCategoriesList = () => async (dispatch, getState) => {
    const { lastFetch } = getState().categories
    if (isOutDated(lastFetch)) {
        dispatch(categoriesRequested())
        try {
            const { content } = await categoryService.fetchAll()
            dispatch(categoriesReceved(content))
        } catch (error) {
            dispatch(categoriesRequestFailed(error.message))
        }
    }
}

export const getCategories = () => (state) => state.categories.entities
export const getCategoriesLoadingStatus = () => (state) =>
    state.categories.isLoading
export const getPopularCategories = (quantity) => (state) => {
    if (state.categories.entities) {
        const arr = [...state.categories.entities]
        arr.length = quantity
        return arr
    }
    return []
}
export const getCategoryNameById = (id) => (state) => {
    if (state.categories.entities) {
        return state.categories.entities.find((cat) => cat._id === id)?.title
    }
    return null
}

export default categoriesReducer
