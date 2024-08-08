import React from 'react';
import { FaPlus, FaEdit, FaTrashAlt } from 'react-icons/fa';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 p-6 flex items-center justify-center">
      <div className="w-full max-w-3xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">Task Manager</h1>
          <p className="text-base md:text-lg text-purple-200 mt-3">Manage your tasks</p>
        </header>

        <main className="bg-white p-6 md:p-8 rounded-xl shadow-2xl">
          <form className="mb-8">
            <div className="mb-6">
              <label className="block text-sm md:text-lg font-semibold text-gray-700 mb-2">Task Name</label>
              <input
                type="text"
                className="w-full p-3 md:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-500"
                placeholder="Enter your task name"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 md:py-4 rounded-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <FaPlus />
              <span>Add Task</span>
            </button>
          </form>

          <ul className="space-y-4 md:space-y-6">
            <li className="bg-gray-50 p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <span className="text-gray-800 font-medium text-base md:text-lg">Sample Task 1</span>
                <div className="flex space-x-2 md:space-x-4">
                  <button className="text-indigo-500 hover:text-indigo-700 font-semibold flex items-center space-x-1">
                    <FaEdit />
                    <span>Edit</span>
                  </button>
                  <button className="text-red-500 hover:text-red-700 font-semibold flex items-center space-x-1">
                    <FaTrashAlt />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            </li>
            <li className="bg-gray-50 p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <span className="text-gray-800 font-medium text-base md:text-lg">Sample Task 2</span>
                <div className="flex space-x-2 md:space-x-4">
                  <button className="text-indigo-500 hover:text-indigo-700 font-semibold flex items-center space-x-1">
                    <FaEdit />
                    <span>Edit</span>
                  </button>
                  <button className="text-red-500 hover:text-red-700 font-semibold flex items-center space-x-1">
                    <FaTrashAlt />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            </li>
            {/* Add more tasks as needed */}
          </ul>
        </main>
      </div>
    </div>
  );
};

export default App;
