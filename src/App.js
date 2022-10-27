import { useState } from "react";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [name , setName] = useState("Todo List Using React.js")

  const [todos, setTodos] =  useState([])
  
  const [edit , setEdit] = useState({
    todo : {},
    isEdit : false
  })



const deleteTodo = (id) => {
  setTodos(todos.filter((todo)=> todo.id !== id ))
}
// Save Todo
const saveTodo = (value) => {

  const newTodo = {
    id : uuidv4(),
    text : value
  }

  setTodos([...todos,newTodo])

}


// update todo

const updateTodo = (id , text) => {
  setTodos(todos.map((todo) => todo.id === id ? {...todo , text : text} : todo))
  setEdit({
    todo : {},
    isEdit : false
  })
}




// Edit Todo

const editTodo = (todo) => {
  setEdit({
    todo : todo,
    isEdit : true
  })
}


  
  return (
    <div>
      <Navbar name = {name}/>
      <Container  todos={todos} saveTodo={saveTodo} deleteTodo={deleteTodo} editTodo={editTodo} edit={edit} updateTodo={updateTodo}/>
    </div>
  );
}

export default App;
