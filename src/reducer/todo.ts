import {TodoActionType, TodoAction} from '../action/todo'

export type Todo = {
    id: number,
    text: string,
    isDone: boolean,
}

export const todoReducer = (state: Todo[], action:TodoAction) => {
    let _state:Todo[] = Object.assign({}, state)
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
            return _state
        case TodoActionType.DELETE_TODO:
            return _state
        default:
            return _state
    }
}