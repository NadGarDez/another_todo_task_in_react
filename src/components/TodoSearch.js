import React, { useState } from "react";
import "../styles/toDoSearch.css"

export const TodoSearch = ()=> {

    const [text, setText] = useState("")

    const onChangeText = (event)=>setText(event.target.value)

    return (
        <div className="inputContainer">
            <input  className="input" placeholder="holix" onChange={onChangeText}/>
        </div>
    )
}