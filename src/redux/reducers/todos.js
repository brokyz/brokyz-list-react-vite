import {
  ADD_TODO,
  REMOVE_TODO,
  GET_TODOS,
  CHANGE_TICK,
  UPDATE_ALL_TICK,
} from '../constant'

let initialState = []
export default (state = initialState, { type, data }) => {
  switch (type) {
    case GET_TODOS:
      return data
    case ADD_TODO:
      return [...state, data]
    case REMOVE_TODO:
      state = state.filter(todo => {
        return todo.id !== data
      })
      return [...state]
    case CHANGE_TICK:
      state = state.map(todo => {
        if (todo.id === data.id) {
          todo.done = data.done
        }
        return { ...todo }
      })
      return [...state]
    case UPDATE_ALL_TICK:
      return [...data]
    default:
      return state
  }
}
