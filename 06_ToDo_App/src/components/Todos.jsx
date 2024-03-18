import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Todos = ({ item, handleDelete, toggleCompleted, editTodo }) => {
  return (
    <>
      <div className="todo bg-slate-200 w-3/4 flex items-center justify-between h-16 px-4 rounded mt-8 overflow-hidden">
        <div className="flex gap-3">
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => toggleCompleted(item.id)}
            name=""
            id=""
            className="cursor-pointer"
          />
          <p className={item.completed ? `line-through` : ""}>{item.task}</p>
        </div>
        <div className="flex gap-4">
          <button onClick={() => handleDelete(item.id)}>
            <MdDelete className="text-2xl hover:text-slate-800" />
          </button>
          <button onClick={() => editTodo(item.id)}>
            <FaEdit className="text-2xl hover:text-slate-800" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Todos;
