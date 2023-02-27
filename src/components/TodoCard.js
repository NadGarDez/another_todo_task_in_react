import React from "react";
import "../styles/todoCard.css";

export const TodoCard = ({children})=> {
    return (
        <div className="card">
            {children}
        </div>
    )
}