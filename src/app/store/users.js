import { createAction, createSlice } from '@reduxjs/toolkit'
import authService from '../services/auth.service'
import localStorageService from '../services/localStorage.service'
import userService from '../services/user.service'
import history from '../utils/history'
import generateAuthError from '../utils/generateAuthError'
import { fullCleanCart, getCart, loadCartUser } from './cart'

const initialState = localStorageService.getAccessToken()
    ? {
          entities: null,
          isLoading: true,
          error: null,
          auth: { userId: localStorageService.getUserId() },
          isLoggedIn: true
      }
    : {
          entities: null,
          isLoading: false,
          error: null,
          auth: null,
          isLoggedIn: false
      }

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        authRequestSuccess: (state, action) => {
            state.auth = action.payload
            state.isLoggedIn = true
        },
        authRequestFailed: (state, action) => {
            state.error = action.payload
        },
        userCreated: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = []
            }
            state.entities.push(action.payload)
        },
        userRequested: (state) => {
            state.isLoading = true
        },
        userReceved: (state, action) => {
            state.entities = action.payload
            state.isLoading = false
        },
        userRequestFailed: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        },
        userLoggedOut: (state) => {
            state.entities = null
            state.isLoggedIn = false
            state.auth = null
        },
        userUpdatedCart: (state, action) => {
            state.entities.cart = action.payload
        },
        userPushingCartFailed: (state, action) => {
            state.error = action.payload
        },
        userRemovedCart: (state) => {
            delete state.entities.cart
        },
        userRemovingCartFailed: (state, action) => {
            state.error = action.payload
        }
    }
})
const { reducer: usersReducer, actions } = usersSlice
const {
    authRequestSuccess,
    authRequestFailed,
    userCreated,
    userRequested,
    userReceved,
    userRequestFailed,
    userLoggedOut,
    userUpdatedCart,
    userPushingCartFailed,
    userRemovedCart,
    userRemovingCartFailed
} = actions

const authRequested = createAction('users/authRequested')
const userCreateRequested = createAction('users/userCreateRequested')
const createUserFailed = createAction('users/createUserFailed')
const userPushingCartRequested = createAction('users/userPushingCartRequested')
const userRemovingCartRequested = createAction(
    'users/userRemovingCartRequested'
)

export const logIn =
    ({ payload, redirect }) =>
    async (dispatch) => {
        const { email, password } = payload
        dispatch(authRequested())
        try {
            const data = await authService.logIn({ email, password })
            dispatch(authRequestSuccess({ userId: data.localId }))
            localStorageService.setTokens(data)
            history.push(redirect)
        } catch (error) {
            const { code, message } = error.response.data.error
            if (code === 400) {
                const errorMessage = generateAuthError(message)
                dispatch(authRequestFailed(errorMessage))
            } else {
                dispatch(authRequestFailed(error.message))
            }
        }
    }

export const signUp =
    ({ email, password, ...rest }) =>
    async (dispatch) => {
        dispatch(authRequested())
        try {
            const data = await authService.register({ email, password })
            localStorageService.setTokens(data)
            dispatch(authRequestSuccess({ userId: data.localId }))
            dispatch(
                createUser({
                    _id: data.localId,
                    email,
                    ...rest
                })
            )
        } catch (error) {
            dispatch(authRequestFailed(error.message))
        }
    }

function createUser(payload) {
    return async function (dispatch) {
        dispatch(userCreateRequested())
        try {
            const { content } = await userService.create(payload)
            dispatch(userCreated(content))
            history.push('/')
        } catch (error) {
            dispatch(createUserFailed(error.message))
        }
    }
}

export const logOut = () => (dispatch) => {
    localStorageService.removeAuthData()
    dispatch(userLoggedOut())
    history.push('/')
    dispatch(fullCleanCart())
}

export const loadCurrentUser = () => async (dispatch) => {
    dispatch(userRequested())
    try {
        const { content } = await userService.getCurrentUser()
        dispatch(userReceved(content))
        dispatch(loadCartUser())
    } catch (error) {
        dispatch(userRequestFailed(error.message))
    }
}
export const pushUserCart = () => async (dispatch, getState) => {
    const isLoggedUser = getIsLoggedIn()(getState())
    const cart = getCart()(getState())
    if (isLoggedUser) {
        try {
            if (cart.items.length === 0) {
                dispatch(userRemovingCartRequested())
                await userService.removeCartUser()
                dispatch(userRemovedCart())
            } else {
                dispatch(userPushingCartRequested())
                const { content } = await userService.update({ cart })
                dispatch(userUpdatedCart(...content))
            }
        } catch (error) {
            dispatch(userPushingCartFailed(error.message))
            dispatch(userRemovingCartFailed(error.message))
        }
    }
}

export const getIsLoggedIn = () => (state) => state.users.isLoggedIn
export const getCurrentUserData = () => (state) => state.users.entities
export const getCurrentUserId = () => (state) => state.users.auth.userId
export const getCurrentUserCart = () => (state) => state.users.entities.cart

export default usersReducer
