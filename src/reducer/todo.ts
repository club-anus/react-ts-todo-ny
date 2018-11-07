import {TodoActionType, TodoAction} from '../action/todo'

export type Todo = {
    id: number,
    text: string,
    isDone: boolean,
}

const initialState:Todo[] = []

export const todoReducer = (state: Todo[] = initialState, action:TodoAction) => {
    let _state = JSON.parse(JSON.stringify(state))
    switch(action.type) {
        case TodoActionType.ADD_TODO:
            const todo:Todo = {
                id: action.id,
                text: action.text,
                isDone: false,
            }
            _state.push(todo)
            return _state
        case TodoActionType.UPDATE_TODO:
            _state[action.id].isDone = !_state[action.id].isDone
            return _state
        case TodoActionType.DELETE_TODO:
            _state.splice(action.id, 1)
            return _state
        default:
            return state
    }
}