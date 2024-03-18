import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todos from "./Todos";
import { TodoContext, TodoProvider, useTodo } from "./context";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [finishedTasks, SetFinishedTasks] = useState(false);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: uuidv4(), ...todo }]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, todo: updatedTodo.todo } : prevTodo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="flex flex-col items-center md:container pb-10  mx-4 md:mx-auto bg-cyan-700 min-h-[60vh] md:w-2/4 mt-24 rounded-md my-4">
        <h1 className="m-4 text-white font-bold text-3xl">
          DoDay Task Tracker
        </h1>
        <div className="flex  justify-center mb-4">
          <TodoForm />
        </div>
        <div className="self-start ml-24 text-white font-bold">
          <label
            className="inline-block ps-[0.15rem] hover:cursor-pointer px-3"
            htmlFor="flexSwitchChecked"
          >
            Finshed tasks
          </label>
          <input
            className="me-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-black/25 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-white after:shadow-switch-2 after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ms-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-switch-1 checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-switch-3 focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ms-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-switch-3 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-white/25 dark:after:bg-surface-dark dark:checked:bg-primary dark:checked:after:bg-primary"
            type="checkbox"
            role="switch"
            id="SelectAll"
            onChange={() => SetFinishedTasks(!finishedTasks)}
            checked={finishedTasks}
          />
        </div>
        {todos.map(
          (item) =>
            (finishedTasks || !item.completed) && (
              <Todos key={item.id} item={item} />
            )
        )}
        ;
      </div>
    </TodoProvider>
  );
};

export default TodoWrapper;
