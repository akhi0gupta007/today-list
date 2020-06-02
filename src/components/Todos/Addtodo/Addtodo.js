import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import classes from "./Addtodo.module.css";
import * as actions from "../../../store/actions/index";
class AddtTodo extends Component {
  state = {
    task: null,
    inputValue:""
  };
  addClicked = () => {
    console.log("Will add the current state in redux state " + this.state.task);
    this.props.onAddTask(this.state.task);
    this.setState({ task: null ,inputValue:''});
  };

  updateTask = (event) => {
    let newTask = {
      name:event.target.value,
      id:null,
      done:false,
      localKey:-1
    }
    this.setState({ task: newTask ,inputValue:event.target.value});
    event.target.placeholder = "";
  };

  render() {
    return (
      <div className={classes.AddToDo}>
        <div>
          <Button icon="add" btnType="SmallButton" clicked={this.addClicked}>
            ADD
          </Button>
        </div>
        <div>
          <Input
            givenValue={this.state.inputValue}
            taskStatus="taskNotDone"
            changed={(event) => this.updateTask(event)}
          ></Input>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     onAddTask: (task) => dispatch(actions.addTask(task)) 
    };
};
const mapStatetoProps = (state) => {
  return {
      tasks: state.taskReducer.tasks
  }
};


export default connect(mapStatetoProps, mapDispatchToProps)(AddtTodo);
