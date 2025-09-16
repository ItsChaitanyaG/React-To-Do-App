import { Fragment } from "react/jsx-runtime";
import { useState } from "react";

function TodoForm2(props) {

    const[task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: task 
        });
    }

    return(
        <form className="todo-form" onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Enter a task"
                required
                value= {task}
                name="text"
                className= "todo-input"
                onChange={(e) => setTask(e.target.value)}
            ></input>
            <button className="todo-button">Add To Do</button>
        </form>
    );

}

export default TodoForm2;