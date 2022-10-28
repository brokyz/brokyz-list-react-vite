import {
  ADD_TODO,
  REMOVE_TODO,
  GET_TODOS,
  CHANGE_TICK,
  UPDATE_ALL_TICK,
} from '../constant'

export const addTodo = data => ({ type: ADD_TODO, data })
export const removeTodo = data => ({ type: REMOVE_TODO, data })
export const getTodos = data => ({ type: GET_TODOS, data })
export const changeTick = data => ({ type: CHANGE_TICK, data })
export const updateAllTick = data => ({ type: UPDATE_ALL_TICK, data })
