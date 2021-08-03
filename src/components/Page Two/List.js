import React from "react";
import ListItem from "./ListItem";
import "./List.css";

const List = ({ tasks, setTasks, setOpenModal }) => {
  return (
    <div className="listDiv">
      <ul>
        {tasks.map((task) => (
          <ListItem
            text={task.text}
            id={task.id}
            setTasks={setTasks}
            tasks={tasks}
            task={task}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
