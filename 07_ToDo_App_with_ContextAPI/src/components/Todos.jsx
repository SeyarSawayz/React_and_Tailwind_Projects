import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useTodo } from "./context";
import { CiSaveDown2 } from "react-icons/ci";

const Todos = ({ item }) => {
  const [isTodoEditable, setIsTodoEditiable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(item.todo);

  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(item.id, { ...item, todo: todoMsg });
    setIsTodoEditiable(false);
  };

  return (
    <>
      <div
        className={`todo bg-slate-200 w-3/4 flex items-center justify-between h-16 px-4 rounded mt-8 overflow-hidden ${
          item.completed ? "bg-red-400" : ""
        } `}
      >
        <div className="flex gap-3">
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => toggleComplete(item.id)}
            name=""
            id=""
            className="cursor-pointer"
          />
          {/* <p className={item.completed ? `line-through` : ""}>{item.todo}</p> */}
          <input
            type="text"
            autoFocus
            className={`md:w-80 rounded-md px-2 bg-transparent outline-none ${
              isTodoEditable
                ? "border border-black/10 px-2 "
                : "border-transparent"
            } ${item.completed ? "line-through" : ""} `}
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
            readOnly={!isTodoEditable}
          />
        </div>
        <div className="flex gap-4">
          <button onClick={() => deleteTodo(item.id)}>
            <MdDelete className="text-2xl hover:text-slate-800" />
          </button>
          <button
            onClick={() => {
              if (item.completed) return;
              if (isTodoEditable) {
                editTodo();
              } else setIsTodoEditiable((prev) => !prev);
            }}
            disabled={item.completed}
          >
            {isTodoEditable ? (
              <CiSaveDown2
                className="text-2xl hover:text-slate-800"
                type="submit"
              />
            ) : (
              <FaEdit className="text-2xl hover:text-slate-800" />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Todos;
