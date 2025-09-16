import { useState } from "react"
import React from 'react'

function TodoForm(props) {
    const[task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: task
          });

        setTask('');
    }

  return (
    <>
      <form>
          <label htmlFor="task">Task:</label>
          <input type="text" 
          id="task" 
          placeholder="Enter a task" 
          required
          value = {task}
          onChange={(e) => setTask(e.target.value)}
           /> 

          <button id="buttonAdd" type="submit" onClick={handleSubmit}>Add</button>
      </form>
    </>
  );
}

export default TodoForm;
