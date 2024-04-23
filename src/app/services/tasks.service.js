import httpService from './http.service'

const tasksEndPoint = 'tasks/'

const taskService = {
    create: async (payload) => {
        const { data } = await httpService.put(
            tasksEndPoint + payload._id,
            payload
        )
        return data
    }
}

export default taskService
