import * as actionTypes from './actionTypes';

//ACTION CREATORS
export const addTask = (task) => {
    return{
        type:actionTypes.ADD_TASK,
        task:task
    }
};