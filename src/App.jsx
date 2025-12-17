import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  function addOrUpdateTodo(){
    if (input.trim() === "") return;

    if (editId !== null) {
      setTodos(
        todos.map((todo) =>
          todo.id === editId ? { ...todo, text: input } : todo
        )
      );
      setEditId(null);
    } else {
      setTodos([...todos, { id: Date.now(), text: input }]);
    }

    setInput("");

  }

  function deleteTodo(id){
    setTodos(todos.filter((todo)=> todo.id !== id));
  }

  function startEdit(todo){
    setEditId(todo.id);
    setInput(todo.text);
  }
  
  return (
    <div style={{padding: 20}}>
      <h2>Todo App</h2>
      <TodoInput
        input={input}
        setInput={setInput}
        onSubmit={addOrUpdateTodo}
        isEditing={editId !== null}
      />
      <TodoList 
      todos={todos} 
      onEdit={startEdit} 
      onDelete={deleteTodo}/>
      
    </div>
  )
}

export default App
