import React from "react";
import TodoItem from "./TodoItem";
export default function TodoList({ data, toggleTodo, handleRemove }) {
  return (
    <>
      <ul>
        {data.length < 1 ? (
          <>No Todo to Show</>
        ) : (
          <TodoItem
            data={data}
            toggleTodo={toggleTodo}
            handleRemove={handleRemove}
          />
        )}
      </ul>
    </>
  );
}
