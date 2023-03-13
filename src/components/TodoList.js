import React from "react";
import "../styles/toDoList.css"

export const TodoList = ({children, error, loading})=> {

    console.log(loading, "hey")
    return (
        <div className="listContainer">
                {
                    loading ? (
                        <div className="feedbackContainer">
                            <p className="family1">
                                Cargando...
                            </p>
                        </div>
                    ) : null
                }
                {
                    error ? (
                        <div className="feedbackContainer">
                            <p className="family1">
                                {error.message}
                            </p>
                        </div>
                    ) : null
                }
                {
                    children
                }
        </div>
    )
}