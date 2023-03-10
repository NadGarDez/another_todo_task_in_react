import React, { useState } from "react";
import "../styles/createToDoButton.css"
import { TodoForm } from "./TodoForm";

export const CreateTodoButton = ({addTodo})=> {

    const [modalVisible, setVisible] = useState(false)
    const onClickAdd = ()=>setVisible(true)

    return (
        <>
            <div className="createToDoContainer">
                <button className="button" onClick={onClickAdd}>Add +</button>
            </div>
            <TodoForm modalVisible={modalVisible} setVisible={setVisible} addTodo={addTodo}/>
        </>
    )
}