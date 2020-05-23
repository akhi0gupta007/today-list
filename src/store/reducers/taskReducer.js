import * as actionTypes from '../actions/actionTypes';

const initialState = {
    tasks : [],
    user : null
}

const reducer = (state = initialState,action) => {
    switch(action.types){
        case actionTypes.ADD_TASK:
            const newTask = {
                ...action.task
            }
            return {
                ...state,
                tasks: state.tasks.concat(newTask)
            }
            default:
                return state;    
    }
}

export default reducer;