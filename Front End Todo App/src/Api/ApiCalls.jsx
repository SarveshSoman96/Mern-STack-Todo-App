import Axios from "axios";

export const getAllTodo = (setallTodos) => {
    Axios.get("http://localhost:5000/")
    .then( res => {
        setallTodos([...res.data])
    })
    .catch(err => console.log(err))
};

export const postTodo = (todoInput, setallTodos, username) => {
    Axios
      .post(
        "http://localhost:5000/todos/new",
        {
          todoName: todoInput,
          author: username
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {

        getAllTodo(setallTodos)
        }

        )
      .catch((err) => console.log(err));
   };

export const deleteTodo = (setallTodo, todoId) => {

    Axios.delete(`http://localhost:5000/todos/delete/${todoId}`)
    .then((res) => {
        // console.log(res)
        getAllTodo(setallTodo)
        }

        )
      .catch((err) => console.log(err));
};

export const completeTodo = (todoId, setallTodo) => {

    Axios.put("http://localhost:5000/todos/update", {
        todoid: todoId
    }
    )
    .then( res => {
        // console.log(res)
        getAllTodo(setallTodo)
    })
};


export const updateTodo = (todoId, editTodo, setallTodos, setEditTodo, setIsUpdating) => {

    Axios.put("http://localhost:5000/todos/updateName",
    {
      todoid: todoId,
      todoName: editTodo
    }
    )
    .then(res => {
      // console.log(res)
      setEditTodo(editTodo)
      setIsUpdating(false)
      getAllTodo(setallTodos)
    })
    .catch(err => console.log(err))
};
