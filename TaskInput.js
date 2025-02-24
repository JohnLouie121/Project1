import React, { useState } from "react";

// TaskInput component handles adding new tasks to the to-do list
const TaskInput = ({ addTask }) => {
  // State to store the value of the new task input
  const [taskText, setTaskText] = useState("");

  // Function to handle input change
  const handleChange = (event) => {
    setTaskText(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    addTask(taskText); // Call addTask function passed from parent
    setTaskText(""); // Clear input field after adding task
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={handleChange}
        placeholder="Enter a task..."
      />
      <button type="submit" className="add-btn">Add</button>
    </form>
  );
};

export default TaskInput;
