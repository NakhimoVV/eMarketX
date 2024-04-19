import { createAction, createSlice, nanoid } from '@reduxjs/toolkit'
import ticketService from '../services/tickets.service'

const ticketSlice = createSlice({
    name: 'tickets',
    initialState: {
        entities: null,
        error: null
    },
    reducers: {
        ticketCreated: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = []
            }
            state.entities.push(action.payload)
        }
    }
})

const { reducer: ticketReducer, actions } = ticketSlice
const { ticketCreated } = actions

const ticketCreateRequested = createAction('tickets/ticketCreateRequested')
const createTicketFailed = createAction('tickets/createTicketFailed')

export const createTicket = (payload) => async (dispatch) => {
    dispatch(ticketCreateRequested())
    const ticket = {
        ...payload,
        _id: nanoid(),
        created_at: Date.now()
    }
    try {
        const { content } = await ticketService.create(ticket)
        dispatch(ticketCreated(content))
    } catch (error) {
        dispatch(createTicketFailed(error.message))
    }
}

export const getCurrentTicketsData = () => (state) => state.users.entities

export default ticketReducer
