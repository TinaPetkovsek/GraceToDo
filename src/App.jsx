import { useEffect, useState } from "react";
import { AddTodo } from "./AddTodo";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodos(title) {
    // setTodos([...todos, title]);
    const novSeznam = [...todos, title];
    setTodos(novSeznam);
  }

  return (
    <div>
      <AddTodo onAddTodo={addTodos}></AddTodo>
    </div>
  );
}
