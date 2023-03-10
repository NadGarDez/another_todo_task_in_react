import React, { useContext, useMemo } from "react";
import { RootContext } from "../context/RootContext";
import { TodoItem } from "./TodoItem";


export const FilteredItems = ()=> {

    const {todoList ,deleteTodo , toggleTodo, search} = useContext(RootContext)

    const filteredTodo = useMemo(
        ()=>todoList.filter(
        item => {
            if(search.length < 1 ) return true;
            return item.text.toLowerCase().includes(search.toLowerCase())
        }
        ),
        [search,todoList]
    )


    return filteredTodo.map(
        (item, index) => (
          <TodoItem key={index + new Date().getTime()} item={item} onDelete={deleteTodo} onToggleTodo={toggleTodo}/>
        )
    )
}