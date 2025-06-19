import { useState } from 'react'

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const newTodo = {
      id: Date.now(),
      title,
      description,
    };

    setTodos([newTodo, ...todos]);
    setTitle('');
    setDescription('');
  };

  return (
    <div className="app-container">
      <h1>TO DO APPLICATION</h1>
      <form className="todo-form" onSubmit={handleAddTodo}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}  required />

        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}  required />

        <button type="submit">Add Task</button>
      </form>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;