import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todos from "./Todos";
import EditTodoForm from "./EditTodoForm";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(true);

  useEffect(() => {
    const todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(todoString);
      setTodos(todos);
    }
  }, []);

  const toggleFinished = () => {
    setShowFinished(!showFinished);
    console.log(showFinished);
  };

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodos = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    saveToLS();
  };

  const handleDelete = (id) => {
    let filter = todos.filter((item) => item.id !== id);
    setTodos(filter);
    saveToLS();
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    saveToLS();
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              isEditing: !todo.isEditing,
            }
          : todo
      )
    );
  };

  const taskEdit = (task, id) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, task, isEditing: !item.isEditing } : item
      )
    );
    saveToLS();
  };

  return (
    <>
      <div className="flex flex-col items-center md:container pb-10  mx-4 md:mx-auto bg-slate-600 min-h-[60vh] md:w-2/4 mt-24 rounded-md my-4">
        <h1 className="m-4 text-white font-bold text-3xl">My Planner</h1>
        <div className="flex  justify-center mb-4">
          <TodoForm addTodos={addTodos} />
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
            checked={showFinished}
            onChange={toggleFinished}
          />
        </div>
        {todos.map((item) =>
          item.isEditing ? (
            <EditTodoForm editTodo={taskEdit} task={item} key={item.id} />
          ) : (
            (showFinished || !item.completed) && (
              <Todos
                key={item.id}
                item={item}
                handleDelete={handleDelete}
                toggleCompleted={toggleCompleted}
                editTodo={editTodo}
              />
            )
          )
        )}
        ;
      </div>
    </>
  );
};

export default TodoWrapper;
