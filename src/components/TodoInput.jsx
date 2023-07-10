import React, { useState } from "react";

export default function TodoInput({ handleAdd }) {
  const [todo, setTodo] = useState("");
  const handleTodo = (item) => {
    setTodo(item);
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    handleAdd(todo)
  };
  return (
    <form onSubmit={handleSubmit} className="todoInput">
      <input
        type="text"
        id="todo"
        className="input"
        onChange={(e) => {
          handleTodo(e.target.value);
        }}
        value={todo}
        name="todo"
      />
      <button type="submit" className="btn btn-red">
        Add
      </button>
    </form>
  );
}
