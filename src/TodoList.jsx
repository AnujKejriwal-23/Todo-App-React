import React from 'react'

function TodoList({todos,onEdit,onDelete}){
  if(todos.length === 0){
    return <p>No todos yet</p>;
  }
  return (
    <ul>
      {todos.map((todo)=>(
        <li key={todo.id}>
          {todo.text}{" "}
          <button onClick={()=> onEdit(todo)}>Edit</button>
          <button onClick={()=> onDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
