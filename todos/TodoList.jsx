import React, { useState } from 'react';
import "./style.css";

const TodoList = () => {

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState(""); // Input should be a string

   
    // const handleSubmit = () => {
    //     if (input.trim() === "") return; 
    //     setTodos([...todos, input]);
    //     setInput("");
    // }

    const handleSubmit=()=>{
        setTodos((todos)=>{
            return todos.concat({
                text:input,
                id:Math.floor(Math.random()*10)
            });
        });

        setInput("")
    }

    // const removeTodo = (indexToRemove) => {
    //     setTodos(todos.filter((_, index) => index !== indexToRemove));
    // }

    const removeTodo = (idToRemove) => {
    setTodos(todos.filter(todo => todo.id !== idToRemove));
}

    return (
        <div className='container'>      
            <input 
                type="text" 
                placeholder='Type todo'
                value={input} 
                onChange={(e) => setInput(e.target.value)}
            />

            <button onClick={handleSubmit}>SUBMIT</button>

            <ul className='todos-list'>
                {todos.map((todo, index) => (
                    <li  className="todo" key={index}>
                        <span>{todo.text}</span>
                        <button className='close' onClick={() => removeTodo(todo.id)}>x</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;
