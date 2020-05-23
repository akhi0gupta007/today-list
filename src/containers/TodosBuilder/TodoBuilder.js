import React, { Component } from "react";
import { connect } from "react-redux";

import Todos from "../../components/Todos/Todos";
import classes from "./TodoBuilder.module.css";
import TodoPanel from "../../components/UI/TodoPanel/TodoPanel";

class TodoBuilder extends Component {
  state = {
    working: false,
  };

  startedWorkingHandler = () => {
    console.log("startedWorkingHandler");
    this.setState({ working: true });
  };

  render() {
    let taskList = null;
    if (this.props.tasks.length > 0) {
      taskList = Object.keys(this.props.tasks).map((key) => {
        return (
          <TodoPanel key={key} name={this.props.tasks[key].name}></TodoPanel>
        );
      });
    }
    return (
      <div className={classes.TodoBuilder}>
        <Todos
          startedWorking={this.startedWorkingHandler}
          hideButton={this.state.working}
        />
        <div className={classes.Tasks}>{taskList}</div>
      </div>
    );
  }
}
const mapStatetoProps = (state) => {
  return {
    tasks: state.taskReducer.tasks,
  };
};

export default connect(mapStatetoProps)(TodoBuilder);
