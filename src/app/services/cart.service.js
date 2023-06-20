import httpService from './http.service'

const cartEndPoint = 'cart/'

const cartService = {
    create: async (payload) => {
        const { data } = await httpService.post(cartEndPoint, payload)
        return data
    }
}

export default cartService
