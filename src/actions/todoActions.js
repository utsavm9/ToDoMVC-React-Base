//Action Types

export const ADD_TODO = 'ADD_TODO'

//Action creators
export function addTodo(todoText) {
    return {
        type: ADD_TODO,
        payload: todoText,
    }
}