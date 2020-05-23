import React  from "react";
import classes from './TodoPanel.module.css'
const todoPanel = (props) => {
    return(
        <div className={classes.TodoPanel}>
             {props.name}
         </div>
    );
}

export default todoPanel;