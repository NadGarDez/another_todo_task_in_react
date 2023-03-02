import React, { useContext } from "react";
import { RootContext } from "../context/RootContext";
import "../styles/toDoList.css"

export const TodoList = ({children})=> {

    const {error, loading} = useContext(RootContext)

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
            {children}
        </div>
    )
}