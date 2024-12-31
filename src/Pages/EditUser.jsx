import React, { useEffect, useState } from 'react'
import { use } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [Task, setTask] = useState({
        userId: "",
        userName: ""
    })
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("userData"))
        setTask({
            userId: data[id].userId,
            userName: data[id].userName
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = JSON.parse(localStorage.getItem("userData"))
        data.splice(id, 1, Task)
        localStorage.setItem("userData", JSON.stringify(data))
        alert("User Updated Successfully")
        navigate("/userList")
    }

    return (
        < >
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h1 className="text-center my-3 text-primary fw-bold ">Edit User</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="userId" className="form-label">User Id</label>
                                <input type="text" className="form-control" id="userId" value={Task.userId} onChange={(e) => setTask({ ...Task, userId: e.target.value })} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="userName" className="form-label">User Name</label>
                                <input type="text" className="form-control" id="userName" value={Task.userName} onChange={(e) => setTask({ ...Task, userName: e.target.value })} />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditUser