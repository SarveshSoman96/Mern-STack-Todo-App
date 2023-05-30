import "./TodoListContainer.css";
import React , { useEffect, useState } from "react";
import { getAllTodo } from "../Api/ApiCalls";

const TodoForm = React.lazy(() => import("./TodoForm"));
const Todo = React.lazy(() => import("./Todo"));
// import Todo from './Todo';
// import TodoForm from "./TodoForm";

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
                    <div key={todo._id} className="todo_info_wrapper">
                      <Todo  todoData={todo} setallTodos={setallTodos} />
                    </div>
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

export default React.memo(TodoListContainer);