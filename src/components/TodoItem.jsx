import React from "react";

export default function TodoItem({ data, toggleTodo, handleRemove }) {
  return data.map((item) => (
    <li key={item.id}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          style={{ marginRight: "5px" }}
          type="checkbox"
          checked={item.completed}
          onChange={(e) => toggleTodo(item.id, e.target.checked)}
          name=""
          id=""
        />
        {item.title}
      </div>
      <button onClick={() => handleRemove(item.id)} className=" btn btn-remove">
        {" "}
        Remove
      </button>
    </li>
  ));
}
