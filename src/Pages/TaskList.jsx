import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TaskList = () => {
    const navigate = useNavigate();
    const [TaskList, setTaskList] = useState([])
    const [userList, setUserList] = useState([]);


    useEffect(() => {
        const taskList = JSON.parse(localStorage.getItem('taskList')) || [];
        setTaskList(taskList);
    }, [])

    const handleEdit = (index) => {
        navigate(`/editTask/${index}`)
    }

    // Showing all the users
    const ShowData = () => {
        const userList = JSON.parse(localStorage.getItem('userData')) || [];
        setUserList(userList);
    }

    useEffect(() => {
        ShowData()
    }, [])


    const handleDelete = (index) => {
        const taskList = JSON.parse(localStorage.getItem('taskList')) || [];
        taskList.splice(index, 1);
        localStorage.setItem('taskList', JSON.stringify(taskList));
        setTaskList(taskList);
    }
    return (
        <div className='container'>
            <h1 className='text-center my-3 text-primary fw-bold '>Task list</h1>
            <div className='row my-3'>

                {TaskList.length > 0 ? TaskList.map((task, index) => (
                    <div className="col-4" key={index}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Task Name: {task.taskName}</h5>
                                <p className="card-text">Task Description: {task.taskDescription}</p>
                                <p className="card-text">Task Status: {task.taskStatus}</p>
                                <p className="card-text">Task Assignee to : {task.taskAssignee}</p>
                                <button className="btn btn-primary" onClick={() => handleEdit(index)}>Edit</button>
                                <button type="submit" className="btn btn-danger ms-2" onClick={() => { handleDelete(index) }}>Delete</button>
                            </div>
                        </div>
                    </div>
                )) : (<h1 className='text-center my-3 text-warning fw-bold '>No Task Found</h1>)}
            </div>
        </div>
    )
}

export default TaskList