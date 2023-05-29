import httpService from './http.service'
// import localStorageService from './localStorage.service'

const userEndPoint = 'users/'

const userService = {
    // get: async () => {
    //     const { data } = await httpService.get(userEndPoint)
    //     return data
    // },
    create: async (payload) => {
        const { data } = await httpService.put(
            userEndPoint + payload._id,
            payload
        )
        return data
    }
    // getCurrentUser: async () => {
    //     const { data } = await httpService.get(
    //         userEndpoint + localStorageService.getUserId()
    //     )
    //     return data
    // },
    // update: async (payload) => {
    //     const { data } = await httpService.patch(
    //         userEndpoint + localStorageService.getUserId(),
    //         payload
    //     )
    //     return data
    // }
}

export default userService
