import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Admin from '../Component/Admin';
import NewItem from './form/NewItem';
import LoginForm from './form/LoginForm';
import Staffcreate from './Staffcreate';
import StaffManagement from './Staff/StaffManagement';
import Sidebar from './Sidebar';

function Navigation() {
    return (
        <>
            <Router>
                <Sidebar />
                <Routes>
                    <Route path="/" element={< LoginForm />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/create-item" element={<NewItem />} />
                    <Route path="/create-staff" element={<Staffcreate />} />
                    <Route path="/All-Items" element={<StaffManagement />} />


                </Routes>
            </Router >
        </>

    )
}

export default Navigation