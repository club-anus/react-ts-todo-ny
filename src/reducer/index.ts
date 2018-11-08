import {combineReducers} from 'redux'
import {todoReducer} from './todo'
import {Todo} from '../reducer/todo'

export type rootState = {
    todoState: Todo[]
}

export const rootReducer = combineReducers({
    todoState: todoReducer,
})