import React, { useState } from "react";
import { RootContext } from "../context/RootContext";
import "../styles/toDoSearch.css"

export const TodoSearch = ()=> {

    return (
        <RootContext.Consumer>
            {
                ({onChangeTextSearch, search})=>(
                    <div className="inputContainer">
                        <input  className="input" placeholder="holix" onChange={onChangeTextSearch} value={search}/>
                    </div>
                )
            }
        </RootContext.Consumer>
    )
}