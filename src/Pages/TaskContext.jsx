import React, { useState, createContext } from 'react'

export const Taskcontext = createContext()

export const TaskProvider = ({ children }) => {
    const [Task, setTask] = useState({
        taskName: "",
        taskDescription: "",
        taskStatus: "pending"
    })

    return (
        <Taskcontext.Provider value={{ Task, setTask }}>
            {children}
        </Taskcontext.Provider>
    )
}

