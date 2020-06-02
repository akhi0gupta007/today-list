import React, { Component } from "react";

import classes from "./TodoPanel.module.css";

class TodoPanel extends Component {

    constructor(props){
        super(props);
        this.state = {
            task:props.task
        };
    }

    taskUpdateHandler = (event) => {
        console.log("Status change ",event.target.checked);
        let updatedTask = {...this.state.task};
        updatedTask.done = event.target.checked;
        this.setState({task:updatedTask});
    }

    render() {
    let styles = [classes.TodoPanel];
    if(this.state.task.done){
        styles.push(classes.done);
    }    
    return (
      <div className={styles.join(" ")}>
        <label className={classes.container}>
          {this.state.task.name}
          <input type="checkbox" onChange={this.taskUpdateHandler}/>
          <span className={classes.checkmark}></span>
        </label>
      </div>
    );
  }
}

export default TodoPanel;
