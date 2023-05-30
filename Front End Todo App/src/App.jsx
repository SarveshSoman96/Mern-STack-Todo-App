import React from 'react';
import './App.css';
const Navbar = React.lazy(() => import("./Components/Navbar"));
const TodoListContainer = React.lazy(() => import("./Components/TodoListContainer"))

function App() {

  return (
    <>
      <Navbar />
      <section className='container todo_form_list_section flex_2'>
          
          <TodoListContainer />
      </section>
    </>
  )
}

export default App;
