import { createSlice } from '@reduxjs/toolkit'

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: {
        entities: []
    },
    reducers: {
        toggleItem: (state, action) => {
            const findItem = state.entities.find((i) => i === action.payload)
            if (!findItem) {
                state.entities.push(action.payload)
            } else {
                state.entities = state.entities.filter(
                    (i) => i !== action.payload
                )
            }
        },
        cleanList: (state) => {
            state.entities = []
        }
    }
})

const { reducer: favoritesReducer, actions } = favoriteSlice
const { toggleItem, cleanList } = actions

export const toggleFavorite = (payload) => (dispatch) => {
    dispatch(toggleItem(payload))
}
export const fullCleanFavoriteList = () => (dispatch) => {
    dispatch(cleanList())
}
// export const loadFavoriteList = () => (dispatch, getState) => {
//     const favoriteList = getCurrentUserCart()(getState())
//     if (favoriteList) {
//         dispatch(pulledCartUser(favoriteList))
//     }
// }

export const getFavoriteList = () => (state) => state.favorites.entities

export default favoritesReducer
