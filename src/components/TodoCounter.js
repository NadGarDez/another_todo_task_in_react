import React from "react";
import "../styles/toDoCounter.css"


export const TodoCounter = ({todoList})=> {

    const completedTodo = todoList.filter(
        item => !!item.completed
    ).length;


    return (
        <div className="container">
            <h2 className="family2">
                    Completed {completedTodo} from {todoList.length}
            </h2>
        </div>   
    )
}