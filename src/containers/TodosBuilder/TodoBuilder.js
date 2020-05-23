import React,{Component} from 'react';
import Todos from '../../components/Todos/Todos';
import classes from './TodoBuilder.module.css';

class TodoBuilder extends Component{
    state = {
        working:false
    }

    startedWorkingHandler = () => {
        console.log("startedWorkingHandler");
        this.setState({working:true});
    }


     render(){
         return(
             <div className={classes.TodoBuilder}>
                <Todos startedWorking={this.startedWorkingHandler} hideButton={this.state.working}/>
             </div>
         );
     }
}

export default TodoBuilder;