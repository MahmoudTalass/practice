import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
import "./TasksApp.css";

const TasksApp = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <div className="tasks-app-div">
      <header className="form-header">
        <h1>Add Tasks</h1>
      </header>
      <section className="form-section">
        <Form
          input={input}
          setInput={setInput}
          tasks={tasks}
          setTasks={setTasks}
        />
        <List tasks={tasks} setTasks={setTasks}/>
      </section>
    </div>
  );
};

export default TasksApp;
