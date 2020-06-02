import * as actionTypes from "../actions/actionTypes";

const initialState = {
  tasks: [],
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      const newTasks = state.tasks.slice();
      let length = newTasks.push(action.task);
      action.task.localKey = length - 1;
      console.log("action invoked", newTasks);
      return {
        ...state,
        tasks: newTasks,
      };
    default:
      return state;
  }
};

export default reducer;
