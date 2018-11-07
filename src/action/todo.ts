let TodoID:number = 0;

export enum TodoActionType {
    ADD_TODO = 'add_todo',
    UPDATE_TODO = 'update_todo',
    DELETE_TODO = 'delete_todo',
}

export type AddTodoAction = {
    type: TodoActionType.ADD_TODO,
    id: number,
    text: string,
}

export type UpdateTodoAction = {
    type: TodoActionType.UPDATE_TODO,
    id: number,
}

export type DeleteTodoAction = {
    type: TodoActionType.DELETE_TODO,
    id: number,
}

export type TodoAction = AddTodoAction | UpdateTodoAction | DeleteTodoAction;

export const addTodo = (text: string):AddTodoAction => {
    return {
        type: TodoActionType.ADD_TODO,
        id: TodoID++,
        text,
    }
}

export const updateTodo = (id: number):UpdateTodoAction => {
    return {
        type: TodoActionType.UPDATE_TODO,
        id,
    }
}

export const deleteTodo = (id: number):DeleteTodoAction => {
    return {
        type: TodoActionType.DELETE_TODO,
        id,
    }
}