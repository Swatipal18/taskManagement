import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <ul className="sidebar-menu list-unstyled">
                <Link className="text-white text-decoration-none" to="/createUser" ><li> Create User</li> </Link>
                <Link className="text-white text-decoration-none" to="/userList" ><li> User List</li> </Link>
                <Link className="text-white text-decoration-none" to="/" > <li>Create Task</li> </Link>
                <Link className="text-white text-decoration-none" to="/taskList" ><li> Task List</li> </Link>
                {/* <li>Services</li>
                <li>Contact</li> */}
            </ul>

            {/* Sidebar toggle button inside the sidebar */}
            <button onClick={toggleSidebar} className="toggle-btn">
                {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
            </button>
        </div>
    );
};

export default SideBar;
