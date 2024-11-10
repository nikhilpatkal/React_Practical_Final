import React, { useState } from 'react';
function Todoapp()
{
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = (event) => {
    event.preventDefault(); // Prevents form from reloading the page
    if (taskInput.trim() !== "") {
      // Add the new task to the tasks array
      setTasks([...tasks, taskInput]);
      setTaskInput(""); // Clear the input field after adding
    }
  };
  // Function to handle task deletion
  const handleDeleteTask = (taskToDelete) => {
    // Remove the task from the list
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };
  return (
    <>
      <h1>To do Application</h1>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)} // Update input state
          placeholder="Enter a new task"
        />
        <button type="submit">Add Task</button>
      </form>

      {/* Display the list of tasks */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteTask(task)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Counter for the total number of tasks */}
      <p>Total tasks: {tasks.length}</p>
    </>
  );
}
export default Todoapp;