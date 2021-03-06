import React from 'react';
import './singleTodo.css';


const TodoElement = (props)=>{
    console.log(props)

return (    

    <div className="single-todo">
    <div>
    <input className="check-item" type="checkbox" />
    </div>
    <div  className="description">

        <h6>{props.todo.title}</h6>
        <p>{props.todo.description}</p>
    </div>
    <div  className="delete-item">
        <button>X</button>
    </div>


    </div>
    

);

}

export default TodoElement;