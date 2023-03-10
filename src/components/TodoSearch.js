import React from "react";
import "../styles/toDoSearch.css"

export const TodoSearch = ({onChangeTextSearch, search})=> {

    return (
        <div className="inputContainer">
            <input  className="input" placeholder="filter by text" onChange={onChangeTextSearch} value={search}/>
        </div>
    )
}