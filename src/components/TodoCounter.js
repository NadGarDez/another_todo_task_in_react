import React, { useContext } from "react";
import { RootContext } from "../context/RootContext";
import "../styles/toDoCounter.css"


export const TodoCounter = ()=> {

    const {todoList} = useContext(RootContext)


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