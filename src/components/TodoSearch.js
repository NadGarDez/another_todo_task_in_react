import React, { useState } from "react";
import "../styles/toDoSearch.css"

export const TodoSearch = ({onChangeText, text})=> {

    return (
        <div className="inputContainer">
            <input  className="input" placeholder="holix" onChange={onChangeText} value={text}/>
        </div>
    )
}