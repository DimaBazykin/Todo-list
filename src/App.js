import { useState } from "react";
import Forma from "./componets/Forma";
import Tabs from "./componets/Tabs";
import Todolist from "./componets/Todolist";
import "./index.scss";

function App() {
  const [tasks, setTasks] = useState([
    {
      title: "Это еще одна задача",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ducimus reprehenderit suscipit.",
      id: 1,
    },
    {
      title: "Это уже другая задача",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ducimus reprehenderit suscipit.",
      id: 2,
    },
  ]);

  function createTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function remoweTask(task) {
    setTasks(tasks.filter((p) => p.id !== task.id));
  }

  function remoweALlTask() {
    setTasks([]);
  }


  return (
    <div className="App">
      <Tabs remove={remoweALlTask}/>
      <Todolist props={tasks} remove={remoweTask} />
      <Forma create={createTask}/>
    </div>
  );
}

export default App;
