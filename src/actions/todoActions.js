//Action Types

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_FINISH = 'TOGGLE_FINISH'

//Action creators
export function addTodo(todoText) {
    return {
        type: ADD_TODO,
        payload: todoText,
    }
}