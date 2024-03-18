import React, { useState } from "react";
import { useTodo } from "./context";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todo) return;

    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <>
      <form className="flex gap-4" onSubmit={handleSubmit}>
        <input
          value={todo}
          onChange={handleChange}
          type="text"
          className="md:w-96 px-2 py-2 rounded-md"
          placeholder="Enter you daily tasks to track"
        />
        <button
          disabled={todo.length <= 3}
          type="submit"
          className="bg-slate-800 disabled:bg-slate-400  text-white px-2 py-0.5 rounded-xl hover:bg-slate-900 hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
        >
          Add task
        </button>
      </form>
    </>
  );
};

export default TodoForm;
