import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UserList = () => {
    const navigate = useNavigate();
    const [Data, setData] = useState([])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("userData"))
        setData(data)
    }, [])

    // Edit Functionality

    const handleEdit = (index) => {
        navigate(`/editUser/${index}`)
    }

    const handleDelete = (id) => {
        const data = JSON.parse(localStorage.getItem("userData"))
        data.splice(id, 1);
        localStorage.setItem("userData", JSON.stringify(data))
        setData(data)
    }


    return (
        <>
            <div className="container">
                <h1 className='text-center my-3 text-primary fw-bold '>User List</h1>
                <div className="row my-3">
                    {Data && Data.map((user, index) => (
                        <div className="col-4" key={index}>
                            <div className="card my-3">
                                <div className="card-body">
                                    <h5 className="card-title">User Id: {user.userId}</h5>
                                    <h5 className="card-title">User Name: {user.userName}</h5>
                                    <button className='btn btn-primary' onClick={() => handleEdit(index)}>Edit</button>
                                    <button className='btn btn-danger ms-2' onClick={() => { handleDelete(index) }}>Delete</button>
                                </div>
                            </div>
                        </div>
                    )) || <h1 className='text-center my-3 text-warning fw-bold '>No Data Found</h1>}

                </div>
            </div>
        </>
    )
}

export default UserList