import React, { useState } from "react";

export default function TodoInput({ handleAdd }) {
  const [todo, setTodo] = useState("");
  const handleTodo = (item) => {
    setTodo(item);
  };
  return (
    <form onSubmit={() => handleAdd(todo)} className="todoInput">
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
