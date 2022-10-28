import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux'

import todoReducer from './reducers/todos'

const allReducer = combineReducers({
  todos: todoReducer,
})
export default createStore(allReducer)
