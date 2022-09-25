import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { tasks as data } from "../data/tasks";

//Aca se almacenan los estaods, es el nombre del contexto
export const TaskContext = createContext();

//Componente que engloba todos los componentes
export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  const createTask = (taskTitle, taskDescription) => {
    setTasks([
      ...tasks,
      {
        title: taskTitle,
        id: tasks.length,
        description: taskDescription,
      },
    ]);
  };

  useEffect(() => {
    setTasks(data);
  }, []);

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        deleteTask: deleteTask,
        createTask: createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
