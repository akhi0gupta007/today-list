import React,{Component} from "react";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import classes from "./Addtodo.module.css";

class AddtTodo extends Component{

    state = {
        task:''
    }
    addClicked = () => {
        console.log("Will add the current state in redux state "+ this.state.task);
        this.setState({task:''});
    }

    updateTask = (event) => {
        this.setState({task:event.target.value});
        event.target.placeholder = '';
    }

    render(){
        return(
            <div className={classes.AddToDo}>
            <div>
              <Button icon="add" btnType="SmallButton" clicked ={this.addClicked}>
                ADD
              </Button>
            </div>
            <div>
              <Input givenValue={this.state.task} taskStatus="taskNotDone" changed={(event) => this.updateTask(event)}></Input>
            </div>
          </div>
        );
    }
}

export default AddtTodo;
