import React, { useContext } from "react";
import { RootContext } from "../context/RootContext";
import "../styles/createToDoButton.css"

export const CreateTodoButton = ()=> {

    const {setVisible} = useContext(RootContext)

    const onClickAdd = ()=>setVisible(true)

    return (
        <div className="createToDoContainer">
            <button className="button" onClick={onClickAdd}>Add +</button>
        </div>
    )
}