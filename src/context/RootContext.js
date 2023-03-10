import { createContext, useState, useMemo } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const RootContext = createContext();

const LOCAL_STORAGE_ITEM_NAME = "TODOS_PLATZI";


export const RootProvider = ({children})=> {

    const {
        toggleTodo,
        deleteTodo,
        addTodo,
        todoList,
        error,
        loading
    }= useLocalStorage(LOCAL_STORAGE_ITEM_NAME)

    const [search, setSearch] = useState("")
    const onChangeTextSearch = (event)=>setSearch(event.target.value)

    return (
        <RootContext.Provider value={{
            onChangeTextSearch,
            search,
            setSearch,
            toggleTodo,
            deleteTodo,
            todoList,
            error,
            loading,
            addTodo
        }}>
            {children}
        </RootContext.Provider>
    )
}