import "./Todo.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck , faPen, faTrash, faFilePen } from '@fortawesome/free-solid-svg-icons';
import {deleteTodo, completeTodo, updateTodo} from "../Api/ApiCalls"
import React, { useState } from "react";


const Todo = ({key, todoData, setallTodos}) => {
    const [isUpdating, setIsUpdating] = useState(false)
    const [editTodo, setEditTodo] = useState(todoData.todoName)


  return (

    <>
                {
                    !isUpdating ? (
                        
                    <div className="todo_info flex_3">
                        <p>{todoData.todoName}</p>
                        <p className="info">Author: {todoData.author}</p>
                        <p className="info">Date: {todoData.date}</p>
                    </div>
                    ) : (
                        <form>
                            <input type="text" value={editTodo} onChange={e => setEditTodo(e.target.value)} className="edit_todo" />
                        </form>
                    )
                }
           
        <div className="flex_1 todo_modify_btns">
            {
                !todoData.completed ? (
                    <>
                    <button type="button" id="check_btn" onClick={() => completeTodo(todoData._id, setallTodos)} disabled={isUpdating ? true : false}>
                    <FontAwesomeIcon icon={faCircleCheck} />
                    </button>
                    {
                        !isUpdating ? (
                            <button type="button" id="edit_btn" onClick={() => setIsUpdating(prev => !prev)}>
                                <FontAwesomeIcon icon={faPen} />
                            </button>
                        ) : (
                            <button type="button" id="edit_btn" onClick={() => updateTodo(todoData._id, editTodo, setallTodos, setEditTodo, setIsUpdating)}>
                                <FontAwesomeIcon icon={faFilePen} />
                            </button>
                        )
                    }
                    
                    <button type="button" id="delete_btn" onClick={() => deleteTodo(setallTodos, todoData._id)} disabled={isUpdating ? true : false}>
                    <FontAwesomeIcon icon={faTrash} />
                    </button>
                    </> 
                    ) : (
                        <button type="button" id="delete_btn" className="completed" onClick={() => deleteTodo(setallTodos, todoData._id)}>
                        <FontAwesomeIcon icon={faTrash} />
                        </button>
                    )
            }
        </div>
    </>
  )
}

export default React.memo(Todo);