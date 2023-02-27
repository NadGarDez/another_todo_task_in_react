import React from "react";
import "../styles/toDoItem.css"


export const TodoItem = ({text})=> {
    return (
        <div className="item">
            <div className="textContainer">
                <p className="family1">
                    {text}
                </p>
            </div>

            <button className="buttonContainer">
                <p className="family1">
                    complete
                </p>
            </button>

            <button className="buttonContainer">
                <p className="family1">
                    delete
                </p>
            </button>
        </div>
    )
}