import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { CreateTask } from './Pages/CreateTask';
import SideBar from './SideBar/SideBar';
import { TaskProvider } from './Pages/TaskContext';
import TaskList from './Pages/TaskList';
import EditTask from './Pages/EditTask';
import CreateUser from './Pages/CreateUser';
import UserList from './Pages/UserList';
import EditUser from './Pages/EditUser';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <TaskProvider>
      <div className="App ms-5">
        <Router>
          <button
            className="btn btn-primary my-3"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
          </button>

          <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

          <div className="container">
            <Routes>
              <Route path="/" element={<CreateTask />} />
              <Route path="/createUser" element={<CreateUser />} />
              <Route path="/taskList" element={<TaskList />} />
              <Route path="/editTask/:id" element={<EditTask />} />
              <Route path="/userList" element={<UserList />} />
              <Route path="/editUser/:id" element={<EditUser />} />
            </Routes>
          </div>
        </Router>
      </div>
    </TaskProvider>
  );
}

export default App;
