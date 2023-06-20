const TOKEN_KEY = 'jwt-token'
const REFRESH_KEY = 'jwt-refresh-token'
const EXPIRES_KEY = 'jwt-expires'
const USERID_KEY = 'user-local-id'
const VIEW_PROD = 'viewProducts'
const CART_GUEST = 'cartGuest'

function getLocalCart() {
    const cart = localStorage.getItem(CART_GUEST)
    return JSON.parse(cart) || []
}

function setLocalCart(array) {
    localStorage.setItem(CART_GUEST, JSON.stringify(array))
}

export function addToLocalCart(item) {
    const cartNow = getLocalCart()
    const foundItem = cartNow.find((itemNow) => itemNow.id === item.id)
    if (!foundItem) {
        setLocalCart([...cartNow, item])
    } else {
        const updateCart = cartNow.map((itemNow) => {
            if (itemNow.id === item.id) {
                return { ...itemNow, count: itemNow.count + 1 }
            } else return itemNow
        })
        setLocalCart(updateCart)
    }
}

export function setView(viewType) {
    localStorage.setItem(VIEW_PROD, viewType)
}
export function setTokens({
    idToken,
    refreshToken,
    localId,
    expiresIn = 3600
}) {
    const expiresDate = new Date().getTime() + expiresIn * 1000
    localStorage.setItem(USERID_KEY, localId)
    localStorage.setItem(TOKEN_KEY, idToken)
    localStorage.setItem(REFRESH_KEY, refreshToken)
    localStorage.setItem(EXPIRES_KEY, expiresDate)
}
export function removeAuthData() {
    localStorage.removeItem(USERID_KEY)
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(REFRESH_KEY)
    localStorage.removeItem(EXPIRES_KEY)
}
export function getAccessToken() {
    return localStorage.getItem(TOKEN_KEY)
}
export function getRefreshToken() {
    return localStorage.getItem(REFRESH_KEY)
}
export function getTokenExpiresDate() {
    return localStorage.getItem(EXPIRES_KEY)
}
export function getUserId() {
    return localStorage.getItem(USERID_KEY)
}
export function getView() {
    return localStorage.getItem(VIEW_PROD)
}

const localStorageService = {
    setTokens,
    getAccessToken,
    getRefreshToken,
    getTokenExpiresDate,
    getUserId,
    removeAuthData,
    setView,
    getView,
    addToLocalCart
}
export default localStorageService
