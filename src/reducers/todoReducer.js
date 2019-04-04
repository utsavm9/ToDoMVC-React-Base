import {ADD_TODO} from '../actions/todoActions'

let numTodos = 0;

const todoReducer = (stateTodoField = [], action) => {
    switch(action.type) {
        
        case ADD_TODO:
            numTodos += 1
            return [
                ...stateTodoField,
                {
                    key: numTodos - 1,
                    title: action.payload,
                    finished: false,
                    editing: false,
                }
            ]

        default: 
            return stateTodoField
    }
}

export default todoReducer