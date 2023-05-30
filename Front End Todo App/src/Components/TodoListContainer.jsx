import "./TodoListContainer.css";
import Todo from './Todo';
import React , { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import { getAllTodo } from "../Api/ApiCalls";

const TodoListContainer = () => {
  const [allTodos, setallTodos] = useState([]);


  useEffect(() => {
    getAllTodo(setallTodos)
  }, []);

  return (
    <div className='todo_list_container flex_3'>
        <TodoForm allTodos={allTodos} setallTodos={setallTodos} />
        <div className="todo_data_wrapper">

          {
            !allTodos.length <= 0 ? (
              <>
                <p>The Todos;</p>

                {
                  allTodos.map( (todo) => (
                    <Todo key={todo._id} todoData={todo} setallTodos={setallTodos} />
                  ))
                }
              </>
            ) : (
              <p> Lets create some todos!</p>
            )
          }
          
          
        
        </div>

    </div>
  )
}

export default TodoListContainer;