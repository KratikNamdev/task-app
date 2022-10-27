import React, { useState } from 'react'
import ListItem from './ListItem'

function ListGroup({todos , deleteTodo , editTodo}) {

  

  return (
    <ul className="collection">
            {
              todos.map((todo)=>
              <ListItem key={todo.id} todo={todo} deleteTodo={deleteTodo} editTodo={editTodo}/>
              )
            }
      </ul>
  )
}

export default ListGroup