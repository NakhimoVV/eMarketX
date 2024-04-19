import httpService from './http.service'

const ticketsEndPoint = 'tickets/'

const ticketService = {
    create: async (payload) => {
        const { data } = await httpService.put(
            ticketsEndPoint + payload._id,
            payload
        )
        return data
    }
}

export default ticketService
