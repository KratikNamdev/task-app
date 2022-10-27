import Form from './Form'
import ListGroup from './ListGroup'

function Container({todos , saveTodo ,deleteTodo , editTodo , edit , updateTodo}) {
  
  
  return (
    <div className="container mx-6">
    <div className="row">
        <Form saveTodo={saveTodo} edit={edit} updateTodo={updateTodo}/>
      </div>
      
      <ListGroup todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
      
  </div>
  )
}

export default Container