import React from "react";

// TaskList component receives tasks, toggleComplete, and deleteTask as props
const TaskList = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <ul>
      {/* Iterate over the tasks array and render each task */}
      {tasks.map((task) => (
        <li key={task.id} className={`task-item ${task.completed ? "completed" : ""}`}>
          {task.text}
          {/* Button to toggle the completion status of the task */}
          <button 
            onClick={() => toggleComplete(task.id)} 
            className={task.completed ? "undo-btn" : "complete-btn"}
          >
            {task.completed ? "Undo" : "Complete"}
          </button>
          {/* Button to remove the task from the list */}
          <button onClick={() => deleteTask(task.id)} className="delete-btn">Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
