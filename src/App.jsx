import React, { useEffect, useState } from 'react';
import { FaPlus, FaEdit, FaTrashAlt, FaSave } from 'react-icons/fa';
import axiosInstance from './Global/Axios';

const App = () => {
  const [taskName, setTaskName] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState(null);
  const [error, setError] = useState(''); // State for error message

  useEffect(() => {
    fetchTask();
  }, []);

  const handleAddTask = async (e) => {
    e.preventDefault();

    if (!taskName.trim()) {
      setError('Task name cannot be empty.');
      return;
    }

    try {
      const response = await axiosInstance.post('/posttask', { name: taskName });
      console.log('Task added:', response.data);
      setTaskName('');
      setError(''); // Clear error message on successful submission
      fetchTask();
    } catch (error) {
      console.error('Failed to add task:', error);
      setError('Failed to add task. Please try again.');
    }
  };

  const fetchTask = async () => {
    try {
      const response = await axiosInstance.get('/tasks');
      setTasks(response.data.reverse());
      // console.log(response.data);
    } catch (error) {
      console.error('Failed to get task:', error);
      setError('Failed to get task. Please try again.');
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      const response = await axiosInstance.delete(`/tasks/${id}`);
      console.log('Task deleted:', response.data);
      fetchTask();
    } catch (error) {
      console.error('Failed to delete task:', error);
      setError('Failed to delete task. Please try again.');
    }
  };

  const handleEditTask = (task) => {
    setIsEditing(true);
    setTaskName(task.name);
    setCurrentTaskId(task._id);
    setError(''); // Clear error message when starting to edit
  };

  const handleUpdateTask = async (e) => {
    e.preventDefault();

    if (!taskName.trim()) {
      setError('Task name cannot be empty.');
      return;
    }

    try {
      const response = await axiosInstance.put(`/tasks/${currentTaskId}`, { name: taskName });
      console.log('Task updated:', response.data);
      setTaskName('');
      setIsEditing(false);
      setCurrentTaskId(null);
      setError(''); // Clear error message on successful update
      fetchTask();
    } catch (error) {
      console.error('Failed to update task:', error);
      setError('Failed to update task. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 p-6 flex items-center justify-center">
      <div className="w-full max-w-3xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">Task Manager</h1>
          <p className="text-base md:text-lg text-purple-200 mt-3">Manage your tasks</p>
        </header>

        <main className="bg-white p-6 md:p-8 rounded-xl shadow-2xl">
          <form className="mb-8" onSubmit={isEditing ? handleUpdateTask : handleAddTask}>
            <div className="mb-6">
              <label className="block text-sm md:text-lg font-semibold text-gray-700 mb-2">Task Name</label>
              <input
                type="text"
                value={taskName}
                onChange={(e) => {
                  setTaskName(e.target.value);
                  if (e.target.value.trim()) {
                    setError(''); // Clear error message on valid input
                  }
                }}
                className="w-full p-3 md:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-500"
                placeholder="Enter your task name"
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
            <button
              type="submit"
              className={`w-full ${isEditing ? 'bg-green-500' : 'bg-gradient-to-r from-indigo-500 to-purple-600'} text-white py-3 md:py-4 rounded-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center space-x-2`}
            >
              {isEditing ? (
                <>
                  <FaSave />
                  <span>Update Task</span>
                </>
              ) : (
                <>
                  <FaPlus />
                  <span>Add Task</span>
                </>
              )}
            </button>
          </form>

          <ul className="space-y-4 md:space-y-6">
            {tasks.map((task) => (
              <li key={task._id} className="bg-gray-50 p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-medium text-base md:text-lg">{task.name}</span>
                  <div className="flex space-x-2 md:space-x-4">
                    <button
                      className="text-indigo-500 hover:text-indigo-700 font-semibold flex items-center space-x-1"
                      onClick={() => handleEditTask(task)}
                    >
                      <FaEdit />
                      <span>Edit</span>
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700 font-semibold flex items-center space-x-1"
                      onClick={() => handleDeleteTask(task._id)}
                    >
                      <FaTrashAlt />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
};

export default App;
