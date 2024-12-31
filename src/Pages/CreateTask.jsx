import React, { useContext, useEffect, useState } from 'react'
import { Taskcontext } from './TaskContext';

export const CreateTask = () => {
    const { Task, setTask } = useContext(Taskcontext)
    const [userList, setUserList] = useState([]);

    const ShowData = () => {
        const userList = JSON.parse(localStorage.getItem('userData')) || [];
        setUserList(userList);
    }

    useEffect(() => {
        ShowData()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        setTask({
            taskName: "",
            taskDescription: "",
            taskStatus: "pending",
            taskAssignee: "Select Employee"
        })

        console.log(Task);

        const taskList = JSON.parse(localStorage.getItem('taskList')) || [];
        taskList.push(Task);
        localStorage.setItem('taskList', JSON.stringify(taskList));
    }
    return (
        < >
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h1 className="card-title text-center">Create Task</h1>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="taskName" className="form-label">Task Name</label>
                                        <input type="text" className="form-control" id="taskName" value={Task.taskName} onChange={(e) => setTask({ ...Task, taskName: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="taskDescription" className="form-label">Task Description</label>
                                        <input type="text" className="form-control" id="taskDescription" value={Task.taskDescription} onChange={(e) => setTask({ ...Task, taskDescription: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="taskStatus" className="form-label">Task Status</label>
                                        <select name="taskStatus" id="" className="form-control form-select " onChange={(e) => setTask({ ...Task, taskStatus: e.target.value })} >
                                            <option value="pending"  >Pending</option>
                                            <option value="inProgress">In Progress</option>
                                            <option value="completed">Completed</option>
                                        </select>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="user" className="form-label">User</label>
                                        <select name="user" id="" className="form-control form-select "
                                            onChange={(e) => setTask({ ...Task, taskAssignee: e.target.value })} required >
                                            <option disabled selected>Select Employee</option>
                                            {userList.map((user, index) => (
                                                <option key={index} value={user.userName}>{user.userName}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Create Task</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
