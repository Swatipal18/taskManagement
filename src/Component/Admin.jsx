import React from 'react';
import Sidebar from './Sidebar';
import plus from '../../public/images/Plus.png';
import clock from '../../public/images/clock.png';

function Admin() {
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                {/* Main Content */}
                <div className="col-md-10 main-content">
                    {/* Action Buttons */}
                    <div className="row">
                        <div className="display shadow col-md-12 gap-2 pt-1 pb-1 container d-flex justify-content-between align-items-center mb-5">
                            <div className="actionbutton ">
                                <img src={plus} alt="plus" /> Add New Item
                            </div>
                            <div className="actionbutton ">
                                <img src={plus} alt="plus" /> Add New Staff
                            </div>
                            <div className="actionbutton ">
                                <img src={plus} alt="plus" /> Order Management
                            </div>
                            <div className="actionbutton ">
                                <img src={plus} alt="plus" /> Staff Management
                            </div>
                            <div className="clock">
                                <img src={clock} alt="Clock" className="clock-icon" />
                                <select className="clock-select" defaultValue="all-time">
                                    <option value="all-time">All Time</option>
                                    <option value="today">Today</option>
                                    <option value="this-week">This Week</option>
                                    <option value="this-month">This Month</option>
                                </select>
                            </div>

                        </div>

                    </div>

                    {/* Overview Section */}
                    <h2 className="section-title mb-4">Overview</h2>

                    <div className="row mb-4">
                        {/* Total Sales Card */}
                        <div className="col-md-6 mb-4 text-center">
                            <div className="stat-card">
                                <h3>Total Sales</h3>
                                <div className="stat-value">₹ 50,000</div>
                                <div className="stat-change positive d-flex justify-content-center align-items-center w-50 ">
                                    <p className="badge bg-success">10% MORE</p>
                                    <p className="change-text">Since Last Week</p>
                                </div>
                            </div>
                        </div>

                        {/* Total Orders Card */}
                        <div className="col-md-6 mb-4 text-center">
                            <div className="stat-card">
                                <h3>Total Orders</h3>
                                <div className="stat-value">43,276</div>
                                <div className="stat-change negative d-flex justify-content-center align-items-center w-50">
                                    <span className="badge bg-danger">0.5% LESS</span>
                                    <span className="change-text">Since Last Week</span>
                                </div>
                            </div>
                        </div>

                        {/* Business Accounts Card */}
                        <div className="col-md-6 text-center">
                            <div className="stat-card">
                                <h3>Total Business Accounts</h3>
                                <div className="stat-value">185</div>
                                <div className="stat-change positive d-flex justify-content-center align-items-center w-50">
                                    <span className="badge bg-success">9.6% MORE</span>
                                    <span className="change-text">Since Last Week</span>
                                </div>
                            </div>
                        </div>

                        {/* Personal Accounts Card */}
                        <div className="col-md-6 text-center">
                            <div className="stat-card">
                                <h3>Total Personal Accounts</h3>
                                <div className="stat-value">1,209</div>
                                <div className="stat-change negative d-flex justify-content-center align-items-center w-50">
                                    <span className="badge bg-danger">0.1% LESS</span>
                                    <span className="change-text">Since Last Week</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Analytics Section */}
                    <div className="analytics-section">
                        <h2 className="section-title mb-4">Analytics</h2>
                        <div className="chart-container">
                            <h3 className="chart-title">Total Sales</h3>
                            <p className="chart-subtitle">from 1-6 Dec, 2020</p>
                            {/* <LineChart width={1000} height={300} data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Line
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#1e3a5f"
                                    strokeWidth={2}
                                    dot={{ fill: '#1e3a5f', r: 6 }}
                                />
                            </LineChart> */}
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
}

export default Admin

// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
// import './styles.css';

// const AdminDashboard = () => {
//     // Sample data for the line chart
//     const chartData = [
//         { name: '01', value: 400 },
//         { name: '02', value: 600 },
//         { name: '03', value: 300 },
//         { name: '04', value: 800 },
//         { name: '05', value: 400 },
//         { name: '06', value: 700 },
//     ];

//     return (
//         <div className="container-fluid">
//             <div className="row">
//                 {/* Sidebar */}
//                 <div className="col-md-2 sidebar">
//                     <div className="logo-section">
//                         <span className="hamburger">☰</span>
//                         <span className="logo">135DEGREES</span>
//                     </div>

//                     <div className="search-box mb-4">
//                         <input type="text" className="form-control" placeholder="Search..." />
//                     </div>

//                     <ul className="nav-menu">
//                         <li className="active"><i className="fas fa-dashboard"></i> Dashboard</li>
//                         <li><i className="fas fa-store"></i> Outlet / Franchise Management</li>
//                         <li><i className="fas fa-box"></i> Items Management</li>
//                         <li><i className="fas fa-chart-bar"></i> Sales Management</li>
//                         <li><i className="fas fa-truck"></i> Delivery Management</li>
//                         <li><i className="fas fa-users"></i> User Management</li>
//                         <li><i className="fas fa-user-tie"></i> Staff Management</li>
//                         <li><i className="fas fa-chart-line"></i> Reports & Analytics</li>
//                         <li><i className="fas fa-bell"></i> Push Notifications</li>
//                         <li><i className="fas fa-image"></i> Upload Banners</li>
//                         <li><i className="fas fa-briefcase"></i> Business Management</li>
//                     </ul>
//                 </div>

//                 {/* Main Content */}
//                 <div className="col-md-10 main-content">
//                     {/* Action Buttons */}
//                     <div className="action-buttons mb-4">
//                         <div className="d-flex justify-content-between align-items-center">
//                             <div className="left-buttons">
//                                 <button className="btn btn-primary me-2">
//                                     <i className="fas fa-plus"></i> Add New Item
//                                 </button>
//                                 <button className="btn btn-primary me-2">
//                                     <i className="fas fa-plus"></i> Add New Staff
//                                 </button>
//                                 <button className="btn btn-dark me-2">Order Management</button>
//                                 <button className="btn btn-dark">Staff Management</button>
//                             </div>
//                             <div className="time-filter">
//                                 <select className="form-select">
//                                     <option>All Time</option>
//                                     <option>This Week</option>
//                                     <option>This Month</option>
//                                     <option>This Year</option>
//                                 </select>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Overview Section */}
//                     <h2 className="section-title mb-4">Overview</h2>

//                     <div className="row mb-4">
//                         {/* Total Sales Card */}
//                         <div className="col-md-6 mb-4">
//                             <div className="stat-card">
//                                 <h3>Total Sales</h3>
//                                 <div className="stat-value">₹ 50,000</div>
//                                 <div className="stat-change positive">
//                                     <span className="badge bg-success">10% MORE</span>
//                                     <span className="change-text">Since Last Week</span>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Total Orders Card */}
//                         <div className="col-md-6 mb-4">
//                             <div className="stat-card">
//                                 <h3>Total Orders</h3>
//                                 <div className="stat-value">43,276</div>
//                                 <div className="stat-change negative">
//                                     <span className="badge bg-danger">0.5% LESS</span>
//                                     <span className="change-text">Since Last Week</span>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Business Accounts Card */}
//                         <div className="col-md-6">
//                             <div className="stat-card">
//                                 <h3>Total Business Accounts</h3>
//                                 <div className="stat-value">185</div>
//                                 <div className="stat-change positive">
//                                     <span className="badge bg-success">9.6% MORE</span>
//                                     <span className="change-text">Since Last Week</span>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Personal Accounts Card */}
//                         <div className="col-md-6">
//                             <div className="stat-card">
//                                 <h3>Total Personal Accounts</h3>
//                                 <div className="stat-value">1,209</div>
//                                 <div className="stat-change negative">
//                                     <span className="badge bg-danger">0.1% LESS</span>
//                                     <span className="change-text">Since Last Week</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Analytics Section */}
//                     <div className="analytics-section">
//                         <h2 className="section-title mb-4">Analytics</h2>
//                         <div className="chart-container">
//                             <h3 className="chart-title">Total Sales</h3>
//                             <p className="chart-subtitle">from 1-6 Dec, 2020</p>
//                             <LineChart width={1000} height={300} data={chartData}>
//                                 <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                                 <XAxis dataKey="name" />
//                                 <YAxis />
//                                 <Tooltip />
//                                 <Line
//                                     type="monotone"
//                                     dataKey="value"
//                                     stroke="#1e3a5f"
//                                     strokeWidth={2}
//                                     dot={{ fill: '#1e3a5f', r: 6 }}
//                                 />
//                             </LineChart>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AdminDashboard;