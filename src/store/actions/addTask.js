import * as actionTypes from './actionTypes';

//ACTION CREATORS
export const addTask = (task) => {
    return(dispatch) =>{
       dispatch(doAddTask(task));
    }
};

export const doAddTask = (task) =>{
    return{
        type: actionTypes.DO_ADD_TASK,
        task:task
    }
}
