import React, { useState } from "react";

function Input_data({ stayte, taskData, compareTime }) {
  const [data, setData] = useState(taskData);
  return (
    <div>
      {stayte ? (
        <span>{data}</span>
      ) : (
        <input
          type="date"
          className="input-date input-task"
          value={data}
          onChange={(event) => {
            setData(event.target.value);
            compareTime(data);
          }}
        />
      )}
    </div>
  );
}

export default Input_data;
