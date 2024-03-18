import React, { useState } from "react";

const TodoForm = ({ addTodos }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodos(value);
    setValue("");
  };
  return (
    <>
      <form className="flex gap-4" onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={handleChange}
          type="text"
          className="md:w-96 px-2 py-2 rounded-md"
          placeholder="Enter you daily tasks to track"
        />
        <button
          disabled={value.length <= 3}
          type="submit"
          className="bg-slate-800 disabled:bg-slate-500 text-white px-2 py-0.5 rounded-xl hover:bg-slate-900 hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
        >
          Add task
        </button>
      </form>
    </>
  );
};

export default TodoForm;
