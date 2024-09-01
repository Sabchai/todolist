import React, { useState } from 'react';
import './App.css';
import Listtodo from "./components/listtodo/Listtodo";
import Addtodo from "./components/addtodo/Addtodo";

function App() {
  const [Todo, SetTodo] = useState([
    { id: 1, text: "wake up at 6am", isDone: false },
    { id: 2, text: "wake up at 7am", isDone: false },
    { id: 3, text: "wake up at 8am", isDone: false },
  ]);

  const handleremove = (id) => {
    SetTodo(Todo.filter(el => el.id !== id));
  };
  const checkTodo = (id) => {
    SetTodo(
      Todo.map((el) =>
        el.id === id ? { ...el, isDone: !el.isDone } : el
      )
    );
  };
  

  return (
    <div className="wrapper">
      <Addtodo />
      <Listtodo Todo={Todo} handleremove={handleremove} checkTodo={checkTodo} />
    </div>
  );
}

export default App;

