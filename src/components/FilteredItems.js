import React, { useMemo } from "react";
import { TodoItem } from "./TodoItem";


export const FilteredItems = (props)=> {

    const {todoList ,deleteTodo , toggleTodo, search} = props

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