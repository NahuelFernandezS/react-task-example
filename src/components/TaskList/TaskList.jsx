import React from "react";
import { useContext } from "react";
import { TaskContext } from "../../content/TaskContext";
import TaskCard from "../TaskCard/TaskCard";

//Componente para listar las tareas
function TaskList() {
  const { tasks } = useContext(TaskContext);
  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No tenes tareas</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
