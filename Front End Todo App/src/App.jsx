import Navbar from './Components/Navbar'
import './App.css'
import TodoListContainer from './Components/TodoListContainer'

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
