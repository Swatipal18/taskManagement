import React, { useState } from 'react';
import logo from '../../public/images/logo.png';
import logo1 from '../../public/images/dashboard.png';
import logo2 from '../../public/images/outlet.png';
import logo3 from '../../public/images/item.png';
import logo4 from '../../public/images/sales.png';
import logo5 from '../../public/images/delivery.png';
import logo6 from '../../public/images/user.png';
import logo7 from '../../public/images/staff.png';
import logo8 from '../../public/images/report.png';
import logo9 from '../../public/images/push.png';
import logo10 from '../../public/images/upload.png';
import logo11 from '../../public/images/Business.png';
import logo12 from '../../public/images/menu.png';
import logo13 from '../../public/images/support.png';
import logo14 from '../../public/images/setting.png';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isItemsDropdownOpen, setIsItemsDropdownOpen] = useState(false);

  const toggleItemsDropdown = () => {
    setIsItemsDropdownOpen(!isItemsDropdownOpen);
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        {/* Sidebar Header */}
        <div className="sidebar-header">
          <header className="header">
            <div className="header-content">
              <div className="logo-section">
                <button className="hamburger-btn" onClick={toggleSidebar} aria-label="Toggle menu">
                  <i className="fa-solid fa-bars text-white"></i>
                </button>
                <img src={logo} alt="135 Degrees" className="logo" />
              </div>
            </div>
          </header>
        </div>
        {/* Search */}
        <div className="search-box mb-4">
          <div className="custom-search-bar">
            <i className="fas fa-search custom-search-icon"></i>
            <input
              type="text"
              className="custom-search-input"
              placeholder=""
            />
          </div>
        </div>

        {/* Sidebar-Menu */}
        <div className="sidebar-menu">
          <ul className="nav-menu">
            <li className="active "><img src={logo1} alt="" />
              <Link to="/admin" className='text-decoration-none text-white ms-2'>Dashboard</Link> </li>
            <li> <img src={logo2} alt="" className='me-1' /> Franchise Management</li>


            <li className="d-flex align-items-center">
              <img src={logo3} alt="" className="me-2" />
              <div className="dropdown">
                <button className="btn dropdown-toggle btn-transparent text-white " type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  Items Management
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Link to="/All-Items" className='text-decoration-none text-dark nav-link'>All Items</Link>
                  <Link to="/create-item" className='text-decoration-none text-dark'>Add New Item</Link>
                  <a className="dropdown-item" href="#">Categories</a>
                  <a className="dropdown-item" href="#">Sizes</a>
                </div>
              </div>
            </li>



            <li className="dropdown-trigger">
              <img src={logo4} alt="" className='me-1' /> Sales Management
              <i className="fas fa-chevron-down ps-4" onClick={toggleItemsDropdown}></i>
            </li>



            {isItemsDropdownOpen && (
              <ul className="dropdown">
                <li className="dropdowns">All Staff</li>
                <li className="dropdowns">
                  <Link to="/create-staff" className='text-decoration-none text-white'>Create New Staff </Link>
                </li>

              </ul>
            )}


            <li> <img src={logo5} alt="" className='me-1' /> Delivery Management</li>
            <li> <img src={logo6} alt="" className='me-1' /> User Management</li>
            <li> <img src={logo7} alt="" className='me-1' /> Staff Management</li>
            <li> <img src={logo8} alt="" className='me-1' /> Reports & Analytics</li>
            <li> <img src={logo9} alt="" className='me-1' /> Push Notifications</li>
            <li> <img src={logo10} alt="" className='me-1' /> Upload Banners</li>
            <li> <img src={logo11} alt="" className='me-1' />  Business Management</li>
            <li><img src={logo12} alt="" className='me-1' />  Menu Management</li>
            <li><img src={logo13} alt="" className='me-1' />  Support</li>
            <li><img src={logo14} alt="" className='me-1' />  Setting</li>


          </ul>
        </div>
      </div >
    </>
  );
};


export default Sidebar;
