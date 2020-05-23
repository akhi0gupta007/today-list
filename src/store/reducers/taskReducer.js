import * as actionTypes from '../actions/actionTypes';

const initialState = {
    tasks : [],
    user : null
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case actionTypes.DO_ADD_TASK:
            const newTasks = state.tasks.slice();
            newTasks.push(action.task);
         console.log("action invoked",newTasks);   
            return {
                ...state,
                tasks: newTasks
            }
            default:
                return state;    
    }
}

export default reducer;