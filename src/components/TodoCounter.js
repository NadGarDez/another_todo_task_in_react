import React from "react";
import "../styles/toDoCounter.css"


export const TodoCounter = (props)=> {

    const {todoList, mediaQuery} = props;

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