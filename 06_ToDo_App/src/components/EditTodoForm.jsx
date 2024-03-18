import React, { useState } from "react";

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };
  return (
    <>
      <form className="flex mt-6" onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={handleChange}
          type="text"
          className="md:w-96 px-2 py-2 rounded-tl-lg rounded-bl-lg "
          placeholder="Update task"
        />
        <button
          type="submit"
          className="bg-slate-800 text-white px-2 py-0.5 rounded-br-lg rounded-tr-lg  hover:bg-slate-900 "
        >
          Update Task
        </button>
      </form>
    </>
  );
};

export default EditTodoForm;
