import httpService from './http.service'
import localStorageService from './localStorage.service'

const userEndPoint = 'users/'

const userService = {
    create: async (payload) => {
        const { data } = await httpService.put(
            userEndPoint + payload._id,
            payload
        )
        return data
    },
    getCurrentUser: async () => {
        const { data } = await httpService.get(
            userEndPoint + localStorageService.getUserId()
        )
        return data
    },
    update: async (payload) => {
        const { data } = await httpService.patch(
            userEndPoint + localStorageService.getUserId(),
            payload
        )
        return data
    },
    removeCartUser: async () => {
        const { data } = await httpService.delete(
            userEndPoint + localStorageService.getUserId() + '/cart'
        )
        return data
    }
}

export default userService
