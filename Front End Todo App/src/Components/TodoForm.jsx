import "./TodoForm.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from "react";
import { postTodo } from "../Api/ApiCalls";
import { useAuth0 } from "@auth0/auth0-react";

const TodoForm = ({setallTodos}) => {
  const [todoInput, setTodoInput] = useState("");
  const { isAuthenticated, user } = useAuth0();


  const toDoSubmitHandler = (e) => {
    e.preventDefault();

    if(!todoInput){
      alert("Enter valid info")
    }
    else if(todoInput && !isAuthenticated){
      alert("Please log in first")
    }
    else if(todoInput && isAuthenticated){
      postTodo(todoInput, setallTodos, user.name)
  
     setTodoInput("")

    }
   
}

  return (
    <form className="todo_input_form flex_1" onSubmit={toDoSubmitHandler}>
        <input type="text" value={todoInput} name='todo_name' placeholder="Enter your todo"  onChange={(e) => setTodoInput(e.target.value)} />
        <button type='submit' className="add_btn">
            <FontAwesomeIcon icon={faPaperPlane} />
        </button>
    </form>
  )
}

export default TodoForm;