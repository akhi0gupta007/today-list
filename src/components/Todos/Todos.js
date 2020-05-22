import React from 'react';
import classes from './Todos.module.css';

const todos = (props) => {
    return (
        <div className={classes.Todos}>
                 <h2>What's on your agenda for today?</h2>
        </div>
    );
}

export default todos;