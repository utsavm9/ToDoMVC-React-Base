import {ADD_TODO, TOGGLE_FINISH} from '../actions/todoActions'

const initialState = {
    numTodo: 0,
    numUnfinished: 0,
    todos: []
}


const todoReducer = (stateTodo = initialState, action) => {
    switch(action.type) {
        
        case ADD_TODO:
            //Trimming the received TODO
            let todoText = action.payload.trim()
            if (!todoText)
                return stateTodo

            //Converting to Title Case
            todoText = todoText.charAt(0).toUpperCase() + todoText.substr(1)

            //Adding the Todo
            return {
                numTodo: stateTodo.numTodo + 1,
                numUnfinished: stateTodo.numUnfinished + 1,
                todos: [
                    ...stateTodo.todos,
                    {
                        key: stateTodo.numTodo,
                        title: todoText,
                        finished: false,
                        editing: false,
                    }
                ] 
            }


        case TOGGLE_FINISH:
            
            let targetTodo = stateTodo.todos.find(element => element.key === action.payload)
            targetTodo.finished = !targetTodo.finished



        default: 
            return stateTodo
    }
}

export default todoReducer