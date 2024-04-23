import { createAction, createSlice, nanoid } from '@reduxjs/toolkit'
import taskService from '../services/tasks.service'
import history from '../utils/history'

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        entities: null,
        error: null
    },
    reducers: {
        taskCreated: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = []
            }
            state.entities.push(action.payload)
        }
    }
})

const { reducer: taskReducer, actions } = taskSlice
const { taskCreated } = actions

const taskCreateRequested = createAction('tasks/taskCreateRequested')
const createTaskFailed = createAction('tasks/createtaskFailed')

export const createTask =
    ({ payload, redirect }) =>
    async (dispatch) => {
        dispatch(taskCreateRequested())
        const task = {
            ...payload,
            _id: nanoid(),
            created_at: Date.now()
        }
        try {
            const { content } = await taskService.create(task)
            dispatch(taskCreated(content))
            history.push(redirect)
        } catch (error) {
            dispatch(createTaskFailed(error.message))
        }
    }

export const getCurrentTasksData = () => (state) => state.users.entities

export default taskReducer
