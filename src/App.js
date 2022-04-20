import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';
import TodoList from './components/TodoList';


function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo){
    setTodos([todo, ...todos]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>React To Do List</p>
        <TodoForm addTodo={addTodo} />
        <TodoList todos = {todos} />
      </header>
    </div>
  );
}

export default App;
