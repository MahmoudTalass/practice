import React from "react";
import { v4 as uuidV4 } from "uuid";
import { FaPlus } from "react-icons/fa";
import "./Form.css";

const Form = ({ tasks, setTasks, input, setInput }) => {
  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, { text: input, id: uuidV4(), completed: false }]);
    setInput("");
    console.log(tasks);
  };

  return (
    <form className="tasks-form">
      <input
        type="text"
        onChange={handleOnChange}
        value={input}
        placeholder="type here..."
        className='task-form-input'
      />
      <button onClick={handleSubmit} className="task-form-button">
        <FaPlus />
      </button>
    </form>
  );
};

export default Form;
