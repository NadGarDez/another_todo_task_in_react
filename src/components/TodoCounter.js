import React from "react";
import { RootContext } from "../context/RootContext";
import "../styles/toDoCounter.css"


export const TodoCounter = ()=> {
    return (
        <RootContext.Consumer>
            {
                ({completedTodo, todoList})=> (
                    <div className="container">
                        <h2 className="family2">
                            Completed {completedTodo} from {todoList.length}
                        </h2>
                    </div>
                )
            }
        </RootContext.Consumer>
    )
}