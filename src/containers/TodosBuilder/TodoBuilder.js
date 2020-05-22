import React,{Component} from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Todos from '../../components/Todos/Todos'

class TodoBuilder extends Component{
     render(){
         return(
             <Aux>
                <Todos/>
             </Aux>
         );
     }
}

export default TodoBuilder;