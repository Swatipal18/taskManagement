import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditTask = () => {
    const { id } = useParams();

    const navigate = useNavigate();

    const [userList, setUserList] = useState([]);

    const [Task, setTask] = useState({
        taskName: "",
        taskDescription: "",
        taskStatus: "pending",
        taskAssignee: ""
    })

    const showTask = () => {
        const data = JSON.parse(localStorage.getItem("taskList"))
        console.log(data[id]);

        setTask({
            taskName: data[id].taskName,
            taskDescription: data[id].taskDescription,
            taskStatus: data[id].taskStatus,
            taskAssignee: data[id].taskAssignee

        })
    }

    // Showing all the users

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("userData"))
        setUserList(data)
    }, [])



    const handleSubmit = (e) => {
        e.preventDefault();
        const data = JSON.parse(localStorage.getItem("taskList"))
        data.splice(id, 1, Task)
        localStorage.setItem("taskList", JSON.stringify(data))
        alert("Task Updated Successfully")
        navigate("/taskList")
    }

    useEffect(() => {
        showTask()
        // ShowData()
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h1 className="card-title text-center">Edit Task</h1>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="taskName" className="form-label">Task Name</label>
                                        <input type="text" className="form-control" id="taskName" value={Task.taskName} onChange={(e) => setTask({ ...Task, taskName: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="taskDescription" className="form-label">Task Description</label>
                                        <textarea className="form-control" id="taskDescription" value={Task.taskDescription} onChange={(e) => setTask({ ...Task, taskDescription: e.target.value })} rows="3"></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="taskStatus" className="form-label">Task Status</label>
                                        <select className="form-select" id="taskStatus" value={Task.taskStatus} onChange={(e) => setTask({ ...Task, taskStatus: e.target.value })}>
                                            <option value="pending">Pending</option>
                                            <option value="in-progress">In Progress</option>
                                            <option value="completed">Completed</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="taskAssignee" className="form-label">Assignee</label>
                                        <select className="form-select" id="taskAssignee" value={Task.taskAssignee} onChange={(e) => setTask({ ...Task, taskAssignee: e.target.value })}>
                                            <option value="Select Employee">Select Employee</option>
                                            {userList && userList.map((user, index) => (
                                                <option key={index} value={user.userName}>{user.userName}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Save</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditTask