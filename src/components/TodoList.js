import React from "react";
import "../styles/toDoList.css"

export const TodoList = ({children})=> {
    return (
        <div className="listContainer">
            {children}
        </div>
    )
}