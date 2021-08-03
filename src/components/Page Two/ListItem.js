import React, { useState } from "react";
import "./ListItem.css";
import Modal from "./Modal";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const ListItem = ({ text, id, task, tasks, setTasks }) => {
  const [openModal, setOpenModal] = useState(false);

  // const handleRemove = () => {
  //   setTasks(tasks.filter((el) => el.id !== task.id));
  // };

  const handleComplete = () => {
    setTasks(
      tasks.map((item) => {
        if (item.id === task.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const handleModal = () => {
    setOpenModal(true);
  };

  return (
    <div className="li-container">
      <li key={id} className={`listItem-li ${task.completed ? "completed" : ""}`}>
        {text}
        <button className='trashBtn' onClick={handleModal}>
          <FaRegTrashAlt />
        </button>
        <button onClick={handleComplete}>
          <FaCheck />
        </button>
      </li>
      {openModal ? (
        <Modal
          setTasks={setTasks}
          tasks={tasks}
          task={task}
          id={id}
          setOpenModal={setOpenModal}
        />
      ) : null}
    </div>
  );
};

export default ListItem;
