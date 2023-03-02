import React from "react";
import { RootContext } from "../context/RootContext";
import "../styles/toDoList.css"

export const TodoList = ({children})=> {
    return (
        <RootContext.Consumer>
            {
                ({error, loading})=>(
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
        </RootContext.Consumer>
    )
}