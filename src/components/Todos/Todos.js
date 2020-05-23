import React from 'react';
import classes from './Todos.module.css';
import Button from '../UI/Button/Button';
import Addtodo from '../../components/Todos/Addtodo/Addtodo';


const todos = (props) => {
    let startButton = <Button icon="rocket" btnType="BigButton" clicked={props.startedWorking}>START NOW</Button>;
    
    if(props.hideButton){
        startButton = <Addtodo ></Addtodo>
    }
    return (
        <div className={classes.Todos}>
                 <h2>What's on your agenda for today?</h2>
       {startButton}   
        </div>
    );
}

export default todos;