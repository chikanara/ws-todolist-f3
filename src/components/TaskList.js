import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ taskList, handleComplete, handleDelete }) => {
  return (
    <div>
      {taskList.map((task) => (
        <TaskItem
          todo={task}
          key={task.id}
          handleComplete={handleComplete}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
