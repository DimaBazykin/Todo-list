import React, { useState } from "react";

function Tabs({remove}) {
  const [active, setActive] = useState(0);

  return (
    <div className="top">
    <ul className="tabs">
      <li className={active === 0  ? 'active' : ''} onClick={() =>{
        setActive(0)
      }}>Все</li>
      <li className={active === 1 ? 'active' : ''} onClick={() =>{
        setActive(1)
      }}>Открытые</li>
      <li className={active === 2 ? 'active' : ''} onClick={() =>{
        setActive(2)
      }}>Завершённые</li>
    </ul>
    <svg
    onClick={remove}
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15 2H9c-1.103 0-2 .897-2 2v2H3v2h2v12c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V8h2V6h-4V4c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm8 16H7V8h10v12z" />
    </svg>
  </div>
  );
}

export default Tabs;
