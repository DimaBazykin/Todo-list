import React from "react";
import Task from "./Task";

function Todolist({ props, remove }) {
  return (
    <div className="todo-list">
    {props.map((task, index) => (
          <Task remove={remove} props={task} />
    ))}
    </div>
  );
}

export default Todolist;
