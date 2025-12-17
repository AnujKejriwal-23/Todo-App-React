import React from 'react'

function TodoInput({input, setInput, onSubmit, isEditing}) {
  return (
    <div>
      <input 
      type="text" 
      value={input}
      placeholder='enter todo..'
      onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={onSubmit}>
        {isEditing ? "Update" : "Add"}
      </button>
    </div>
  )
}

export default TodoInput
