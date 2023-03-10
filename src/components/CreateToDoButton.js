import React, { useContext, useState } from "react";
import { RootContext } from "../context/RootContext";
import "../styles/createToDoButton.css"
import { TodoForm } from "./TodoForm";

export const CreateTodoButton = ()=> {

    const [modalVisible, setVisible] = useState(false)
    const onClickAdd = ()=>setVisible(true)

    return (
        <>
            <div className="createToDoContainer">
                <button className="button" onClick={onClickAdd}>Add +</button>
            </div>
            <TodoForm modalVisible={modalVisible} setVisible={setVisible}/>
        </>
    )
}