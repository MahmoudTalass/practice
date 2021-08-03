import React from "react";
import "./Modal.css";

const Modal = ({ setOpenModal, tasks, task, id, setTasks }) => {
  const handleRemove = () => {
    setTasks(tasks.filter((el) => el.id !== task.id));
    setOpenModal(false);
  };

  const handleModal = () => setOpenModal(false);

  return (
    <div className="modal-container">
      <div className="modal-header">
        <h1>Confirm Delete </h1>
      </div>
      <div className="modal-body">
        <p>Are You Sure You Want to Delete This Task?</p>
      </div>
      <div className="modal-confirm-cancel">
        <div className="btn1-container">
          <button className="btn1" onClick={handleModal}>
            Cancel
          </button>
        </div>
        <div className="btn2-container">
          <button className="btn2" onClick={handleRemove}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
