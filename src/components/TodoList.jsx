import React, { useEffect } from "react";
import { useState } from "react";
export default function TodoList({ data }) {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    setTodo(() => [...data]);
  }, [data]);

  const toggleTodo = (id, completed) => {
    setTodo((currentTodo) => {
      return currentTodo.map((to) => {
        if (to.id == id) {
          return { ...to, completed };
        }
        return to;
      });
    });
  };
  const handleRemove = (id) => {
    setTodo((currentTodo) => {
      return currentTodo.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <ul>
        {todo.length < 1 ? (
          <>No Todo to Show</>
        ) : (
          todo.map((item, index) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={(e) => toggleTodo(item.id, e.target.checked)}
                name=""
                id=""
              />
              <p> {item.title}</p>
              <button
                onClick={() => handleRemove(item.id)}
                className=" btn btn-remove"
              >
                {" "}
                Remove
              </button>
            </li>
          ))
        )}
      </ul>
    </>
  );
}
