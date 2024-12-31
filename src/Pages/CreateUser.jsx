import React, { useState } from 'react'

const CreateUser = () => {

    const [Task, setTask] = useState({
        userId: "",
        userName: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Task);
        const userData = JSON.parse(localStorage.getItem("userData")) || [];
        userData.push(Task);
        localStorage.setItem("userData", JSON.stringify(userData));

        setTask({
            userId: "",
            userName: ""
        })
    }

    return (

        < >
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h1 className="card-title text-center">Create User</h1>
                            </div>
                            <div className="card-body">
                                <form className='form' onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label" >User Id</label>
                                        <input type="number" className="form-control" id="name" value={Task.userId} onChange={(e) => setTask({ ...Task, userId: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">User name</label>
                                        <input type="text" className="form-control" id="name" value={Task.userName} onChange={(e) => setTask({ ...Task, userName: e.target.value })} />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CreateUser