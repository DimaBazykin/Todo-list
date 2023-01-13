import React, { useState } from "react";

function Input_text({ stayte, taskText }) {
  const [text, setText] = useState(taskText);
  return (
    <div>
      {stayte ? (
        <span>{text}</span>
      ) : (
        <input
          type="text"
          placeholder="Введите текст..."
          className="input-text input-task"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      )}
    </div>
  );
}

export default Input_text;
