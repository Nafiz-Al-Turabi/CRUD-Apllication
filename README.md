# Todo List Application

This project is a simple Todo List Application built using React. It allows users to add, delete, update, and filter tasks based on priority. Here's a brief overview of the features and components:

## Features:

1. **Add New Task:**
   - Users can input a task and select its priority (Low, Medium, or High) and add it to the list.

2. **Delete Task:**
   - Users can delete a task by clicking on the delete button associated with each task.

3. **Update Task:**
   - Users can update a task by clicking on the edit button associated with each task. This opens an updating window where users can modify the task text and priority.

4. **Mark as Complete:**
   - Users can mark a task as complete by clicking on the circle icon associated with each task.

5. **Filter by Priority:**
   - Users can filter tasks based on priority (All, Low, Medium, High) using the filter dropdown menu.

## Components:

- **App Component (App.js):**
  - Main component containing the entire application logic.
  - Manages state for new tasks, task priority, tasks list, updating tasks, updated task text and priority, filter priority, and filter open status.
  - Contains methods for adding, deleting, updating, marking tasks as complete, and filtering tasks.
  - Renders the header, task input section, filter dropdown, and task list.

## Libraries and Icons Used:

- **React Icons:**
  - Imported icons for delete, filter, pencil (edit), and checkbox functionalities.
- **React Hooks (useState, useEffect):**
  - Utilized useState and useEffect hooks for managing component state and side effects respectively.

## Styling and Assets:

- **CSS (App.css):**
  - External CSS file for styling the application.
- **Logo:**
  - Included a logo image for branding purposes.

## Deployment:

- This application can be deployed to platforms like GitHub Pages, Netlify, or Vercel for public access.

## Usage:

- Users can clone or download the project repository and run it locally using npm or yarn.
- They can also contribute to the project by enhancing existing features or adding new ones.
