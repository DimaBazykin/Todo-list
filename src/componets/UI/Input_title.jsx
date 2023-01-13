import React, { useState } from "react";

function Input_title({ stayte , taskTitle}) {
  const [title, setTitle] = useState(taskTitle);
  return (
    <div>
      {stayte ? (
        <b>{title}</b>
      ) : (
        <input
          type="text"
          placeholder="Название"
          className="input-title  input-task"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      )}
    </div>
  );
}

export default Input_title;
