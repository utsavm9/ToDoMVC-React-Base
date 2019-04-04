import { combineReducers } from 'redux'
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from '../actions/blahActions.js'
import blahReducer from './blah.js'
import todoReducer from './todoReducer.js'

//if you wanted to add another reducer, you would add it here
const reducers = combineReducers({
  blahReducer,
  todoReducer,
})

export default reducers