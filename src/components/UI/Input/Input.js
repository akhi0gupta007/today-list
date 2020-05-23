import React from 'react';
import classes from './Input.module.css';

const input = (props) => {
    let styles = [classes.Input, classes[props.taskStatus]].join(" ");
    return(
        <div className={classes.Input}>
            <input value={props.givenValue} type="text"  placeholder="Buy Fruits... " className = {styles} onChange={props.changed}/>
        </div>
    );
}

export default input;