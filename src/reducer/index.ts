import {combineReducers} from 'redux'
import {todoReducer} from './todo'
import {Todo} from '../reducer/todo'

export interface IrootState {
    todoState: Todo[]
}

export const rootReducer = combineReducers({
    todoState: todoReducer,
})