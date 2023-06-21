import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

export default function Todo() {
  const [data, setData] = useState(() => {
    const localvalue = localStorage.getItem("Items");
    console.log(localvalue);
    if (localvalue == null) return [];
    return JSON.parse(localvalue);
  });
  useEffect(() => {
    localStorage.setItem("Items", JSON.stringify(data));
  }, [data]);
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

  const toggleTodo = (id, completed) => {
    setData((currentTodo) => {
      return currentTodo.map((to) => {
        if (to.id == id) {
          return { ...to, completed };
        }
        return to;
      });
    });
  };
  const handleRemove = (id) => {
    setData((currentTodo) => {
      return currentTodo.filter((todo) => todo.id !== id);
    });
  };

  console.log(data);
  return (
    <div className="todo">
      <h1 className="text">Todo</h1>
      <TodoInput handleAdd={handleAdd} />
      <TodoList
        data={data}
        toggleTodo={toggleTodo}
        handleRemove={handleRemove}
      />
    </div>
  );
}
