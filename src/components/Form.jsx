import React, { useEffect, useState } from 'react'

function Form({saveTodo , edit , updateTodo}) {
 
  useEffect(()=>{
    setValue(edit.todo.text)
  },[edit])



  const [value , setValue] = useState("")

  const handleChange = (inputValue)=>{
    setValue(inputValue)
  }


  const handleSubmit = (e) =>{
    e.preventDefault()
    

    if(edit.isEdit){
      updateTodo(edit.todo.id , value)
    }else{
      saveTodo(value)
    }

    setValue("")
  }



  return (
    <form className="col s12" onSubmit={(e)=>handleSubmit(e)}>
          <div className="row">
            <div className="input-field col s12">
              <input value={value} placeholder="Enter Tasks" id="icon_prefix2" className="materialize-textarea" required onChange={(e) => handleChange(e.target.value) }></input>
            </div>
            <button id="save-btn" className="btn waves-effect waves-light" type="submit">Save</button>
          </div>
        </form>
  )
}

export default Form