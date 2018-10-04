import { uniqueId } from '../actions'

const mockTasks = [
  {
    id: uniqueId(),
    title: 'Learn Redux',
    description: 'The store, actions, and reducers, oh my!',
    status: 'In Progress'
  },
  {
    id: uniqueId(),
    title: 'Peace on Earth',
    description: 'No big deal.',
    status: 'In Progress'
  }
]

const tasks = (state = { tasks: mockTasks }, action) => {
  switch (action.type) {
    case 'CREATE_TASK':
      return {
        tasks: state.tasks.concat(action.payload)
      }
    case 'EDIT_TASK':
      const { payload } = action
      return {
        tasks: state.tasks.map(task => {
          if (task.id === payload.id) {
            return Object.assign({}, task, payload.params)
          }
          return task
        })
      }
    default:
      return state
  }
}

export default tasks
