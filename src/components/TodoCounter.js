import React from "react";
import "../styles/toDoCounter.css"


export const TodoCounter = ({completed = 0, totalTodo = 0})=> {
    return (
        <div className="container">
            <h2 className="family2">
                Haz completado {completed} de {totalTodo}
            </h2>
        </div>
    )
}