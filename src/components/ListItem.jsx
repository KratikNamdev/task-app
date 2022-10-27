import React from 'react'

function ListItem({todo , deleteTodo , editTodo}) {
  return (
    <>
    <li className="collection-item"> {todo.text} <button id="del-btn" className="btn waves-effect waves-light red darken-3"  onClick={()=>deleteTodo(todo.id)}>X</button> <button id="del-btn" className="btn waves-effect waves-light blue darken-3"  onClick={()=>editTodo(todo)}>E</button></li>
    </>
  )
}

export default ListItem