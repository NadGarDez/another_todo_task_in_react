import React from "react";
import "../styles/toDoItem.css"


export const TodoItem = ({item, onDelete , onToggleTodo})=> {
    return (
        <div className="item">
            <div className="textContainer" >
                <p className="family1">
                    {item.text}
                </p>
            </div>
            <div className="buttonsContainer">
                <button className="buttonContainer"
                    onClick={
                        ()=> onToggleTodo(item.id)
                    }
                >
                    <p className="family1">
                        {item.completed ? "Uncomplete" : "Complete"}
                    </p>
                </button>

                <button className="buttonContainer"
                    onClick={
                        ()=>onDelete(item.id)
                    }
                >
                    <p className="family1">
                        delete
                    </p>
                </button>
            </div>
        </div>
    )
}