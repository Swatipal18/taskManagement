import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar';

const StaffManagement = () => {
    const [staffList, setStaffList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedRole, setSelectedRole] = useState('');
    const itemsPerPage = 10;

    const roles = ['Delivery Boy', 'Staff Member', 'Store Manager', 'Kitchen Member'];

    useEffect(() => {
        fetchStaffList();
    }, []);

    const fetchStaffList = async () => {
        try {
            const response = await axios.get('your-api-endpoint/staff');
            setStaffList(response.data);
        } catch (error) {
            console.error('Error fetching staff list:', error);
        }
    };

    const handleAddStaff = () => {
        window.location.href = '/add-staff';
    };

    const handleEdit = async (id) => {
        try {
            console.log('Editing staff member:', id);
        } catch (error) {
            console.error('Error editing staff:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`your-api-endpoint/staff/${id}`);
            fetchStaffList();
        } catch (error) {
            console.error('Error deleting staff:', error);
        }
    };

    const handleStatusToggle = async (id, currentStatus) => {
        try {
            await axios.patch(`your-api-endpoint/staff/${id}`, {
                status: !currentStatus
            });
            fetchStaffList();
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    //   const filteredStaff = staffList.filter(staff => {
    //     const matchesSearch = staff.name.toLowerCase().includes(searchTerm.toLowerCase());
    //     const matchesRole = selectedRole ? staff.role === selectedRole : true;
    //     return matchesSearch && matchesRole;
    //   });

    // const totalPages = Math.ceil(filteredStaff.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    // const currentStaff = filteredStaff.slice(startIndex, endIndex);

    return (
        <div className="container-fluid p-4">
            <div className="  card">
                {/* <Sidebar /> */}
                <div className="card-body">
                    <div className="row mb-4">
                        <div className="col-md-3">
                            <button
                                className="btn btn-primary d-flex align-items-center gap-2"
                                onClick={handleAddStaff}
                            >
                                <i className="bi bi-plus-lg"></i> Add New Staff
                            </button>
                        </div>
                        <div className="col-md-9">
                            <div className="d-flex justify-content-end gap-3">
                                <div className="position-relative">
                                    <i className="bi bi-search position-absolute"
                                        style={{ left: '10px', top: '50%', transform: 'translateY(-50%)' }}></i>
                                    <input
                                        type="text"
                                        className="form-control ps-4"
                                        placeholder="Search by Name"
                                        style={{ paddingLeft: '35px', width: '250px' }}
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                                <select
                                    className="form-select"
                                    style={{ width: '150px' }}
                                    value={selectedRole}
                                    onChange={(e) => setSelectedRole(e.target.value)}
                                >
                                    <option value="">All Roles</option>
                                    {roles.map(role => (
                                        <option key={role} value={role}>{role}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Mobile Number</th>
                                    <th>Role</th>
                                    <th>Status</th>
                                    <th className="text-end">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {currentStaff.map((staff, index) => (
                                    <tr key={index}>
                                        <td>{staff.name}</td>
                                        <td>{staff.mobile}</td>
                                        <td>{staff.role}</td>
                                        <td>
                                            <div className="form-check form-switch">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    checked={staff.status}
                                                    onChange={() => handleStatusToggle(staff.id, staff.status)}
                                                />
                                            </div>
                                        </td>
                                        <td className="text-end">
                                            <button
                                                className="btn btn-outline-primary btn-sm me-2"
                                                onClick={() => handleEdit(staff.id)}
                                            >
                                                EDIT
                                            </button>
                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => handleDelete(staff.id)}
                                            >
                                                DELETE
                                            </button>
                                        </td>
                                    </tr>
                                ))} */}
                            </tbody>
                        </table>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-4">
                        {/* <div className="text-muted">
                            Showing {startIndex + 1}-{Math.min(endIndex, filteredStaff.length)} of {filteredStaff.length} Staff
                        </div> */}
                        <div className="d-flex gap-2 align-items-center">
                            <button
                                className="btn btn-outline-secondary btn-sm"
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                            >
                                <i className="bi bi-chevron-left"></i>
                            </button>
                            <span className="px-3 py-1 bg-light rounded">
                                {currentPage}
                            </span>
                            {/* <button
                                className="btn btn-outline-secondary btn-sm"
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                            >
                                <i className="bi bi-chevron-right"></i>
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaffManagement;