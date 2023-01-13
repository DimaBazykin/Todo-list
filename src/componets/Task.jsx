import React, { useState } from "react";
import Input_data from "./UI/Input_data";
import Input_text from "./UI/Input_text";
import Input_title from "./UI/Input_title";

function Task({ props, remove }) {
  const [comlete, setComlete] = useState(true);
  const dataNow = new Date();
  let dataTask =
    dataNow.getFullYear() +
    "-" +
    (""+dataNow.getMonth() + 1) +
    "-" +
    ("0"+dataNow.getDate());
  const [change, setChange] = useState(true);
  const [dataChange, setDataChange] = useState(true);
  
  function compareTime(data) {
    setComlete(data < dataTask);
  }
  
  return (
    <div className="item">
      <input
        className={comlete === true  ? 'styled-checkbox' : 'styled-checkbox fail'}
        id={props.id}
        type="checkbox"
        value={props.id}
      />
      <label for={props.id} />
      <div className="item__content">
        <Input_title taskTitle={props.title} stayte={change} />
        <Input_text taskText={props.body} stayte={change} />
        <div className="item__bottom">
          <ul>
            <li>
              <svg
                style={{ width: 24, height: 24 }}
                viewBox="0 0 70 70"
                onClick={() => {
                  if (dataChange) {
                    setDataChange(false);
                  } else {
                    setDataChange(true);
                  }
                }}
              >
                <path d="M51,19h-4v-4h-4v4H27v-4h-4v4h-4c-2.209,0-4,1.791-4,4v28c0,2.209,1.791,4,4,4h32c2.209,0,4-1.791,4-4V23   C55,20.791,53.209,19,51,19z M51,51H19V31h32V51z M51,27H19v-4h32V27z" />
                <rect height="4" width="4" x="35" y="35" />
                <rect height="4" width="4" x="43" y="35" />
                <rect height="4" width="4" x="35" y="43" />
                <rect height="4" width="4" x="27" y="43" />
              </svg>
              <Input_data taskData={dataTask} stayte={dataChange} compareTime ={compareTime}/>
            </li>
            <li onClick={() => remove(props)}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 2H9c-1.103 0-2 .897-2 2v2H3v2h2v12c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V8h2V6h-4V4c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm8 16H7V8h10v12z" />
              </svg>
            </li>
            <li
              onClick={() => {
                if (change) {
                  setChange(false);
                } else {
                  setChange(true);
                }
              }}
            >
              <svg viewBox="0 0 18 18">
                <g
                  fill="none"
                  fill-rule="evenodd"
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                >
                  <g
                    fill="#000000"
                    id="Core"
                    transform="translate(-213.000000, -129.000000)"
                  >
                    <g
                      id="create"
                      transform="translate(213.000000, 129.000000)"
                    >
                      <path
                        d="M0,14.2 L0,18 L3.8,18 L14.8,6.9 L11,3.1 L0,14.2 L0,14.2 Z M17.7,4 C18.1,3.6 18.1,3 17.7,2.6 L15.4,0.3 C15,-0.1 14.4,-0.1 14,0.3 L12.2,2.1 L16,5.9 L17.7,4 L17.7,4 Z"
                        id="Shape"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </li>
          </ul>
        </div>
        {props.img && (
        <div>
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(props.img)} />
        </div>
      )}
      </div>
    </div>
  );
}

export default Task;
