import React, { useContext, useState } from "react";
import { RootContext } from "../context/RootContext";
import "../styles/todoForm.css";
import { Modal } from "./Modal";

export const TodoForm = ()=> {

    const [text, setText] = useState("")

    const {addTodo, modalVisible, setVisible} = useContext(RootContext)

    const manageAddButton = ()=> {
        addTodo({
            text,
            id: new Date().getTime(),
            completed: false
        })
        setText("")
        setVisible(false)
    }

    const manageCancelButton = ()=>setVisible(false)

    const onChangeText = ({target: {value}})=> setText(value)


    return (
        <>
            {
                modalVisible ? (
                    <Modal>
                        <div className="modalBody">
                            <div className="cardForm">
                                <div className="blockContainer">
                                    <h2 className="modalTitle">
                                        Añade una tarea
                                    </h2>
                                </div>
                                <div className="inputContainer">
                                    <input className="input" onChange={onChangeText} value={text}/> 
                                </div>

                                <div className="blockContainer">
                                    <button className="button" onClick={manageAddButton}>Add +</button>
                                    <button className="button" style={{marginLeft: 16}} onClick={manageCancelButton}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                ) : null
            }
        </>
    )
}