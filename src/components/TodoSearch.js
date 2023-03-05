import React from "react";
import { RootContext } from "../context/RootContext";
import "../styles/toDoSearch.css"

export const TodoSearch = ()=> {

    return (
        <RootContext.Consumer>
            {
                ({onChangeTextSearch, search})=>(
                    <div className="inputContainer">
                        <input  className="input" placeholder="filter by text" onChange={onChangeTextSearch} value={search}/>
                    </div>
                )
            }
        </RootContext.Consumer>
    )
}