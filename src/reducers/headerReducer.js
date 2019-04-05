//Actions
import { UPDATE_CURRENT_TODO } from '../actions/headerActions'
import { ADD_TODO } from '../actions/todoActions';

const headerReducer = (stateHeaderField = "", action) => {
    switch(action.type) {
        case UPDATE_CURRENT_TODO:
            return action.payload

        case ADD_TODO:
            return ""

        default:
            return stateHeaderField
    }
}


export default headerReducer