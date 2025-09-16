import React, {useState} from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = { id: todo.id, text: todo.text, completed: false };
        setTodos([...todos, newTodos]);
    }

    function deleteTodo(id) {
            setTodos(todos.filter(todo => todo.id !== id));
    }

    function toggleTodo(id) {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return {...todo, completed: !todo.completed};
            }
            return todo;
        }));
    }

  return (
    <div>
        <h1>What's the plan Today?</h1>
        <TodoForm onSubmit={addTodo}/> <br/><br/>
        <ul >
          {todos.map(todo => (
            <li className="todo-row" key={todo.id}>
              <span style={{ textDecoration: todo.completed ? "line-through" : "none"}}>{todo.text}</span> 
            <span><input className="todo-controls" type='checkbox' checked={todo.completed} onChange={() => toggleTodo(todo.id)}></input></span>
            <span><button className="btn delete, todo-controls" onClick={() => deleteTodo(todo.id)}>X</button></span> 
             <br/><br/> </li>))}
        </ul>
    </div>
  )
}

export default TodoList;
