import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

export default function Todo() {
  const [data, setData] = useState([]);

  const handleAdd = (todo) => {
    if (todo == "") return;
    setData((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        title: todo,
        completed: false,
      },
    ]);
  };

  
  return (
    <div className="todo">
      <h1 className="text">Todo</h1>
      <TodoInput handleAdd={handleAdd} />
      <TodoList data={data} />
    </div>
  );
}
