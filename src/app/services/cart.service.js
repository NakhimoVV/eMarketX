import httpService from './http.service'
import localStorageService from './localStorage.service'

const cartEndPoint = 'carts/'

const cartService = {
    update: async (payload) => {
        const { data } = await httpService.patch(
            cartEndPoint + localStorageService.getUserId(),
            payload
        )
        return data
    }
}

export default cartService
