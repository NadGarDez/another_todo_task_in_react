import { createContext, useState, useMemo } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const RootContext = createContext();

const LOCAL_STORAGE_ITEM_NAME = "TODOS_PLATZI";


export const RootProvider = ({children})=> {

    const {
        toggleTodo,
        deleteTodo,
        todoList,
        completedTodo,
        error,
        loading
    }= useLocalStorage(LOCAL_STORAGE_ITEM_NAME)

    const [search, setSearch] = useState("")
    const onChangeTextSearch = (event)=>setSearch(event.target.value)

    const filteredTodo = useMemo(
        ()=>todoList.filter(
        item => {
            if(search.length < 1 ) return true;
            return item.text.toLowerCase().includes(search.toLowerCase())
        }
        ),
        [search,todoList]
    )

    return (
        <RootContext.Provider value={{
            filteredTodo,
            onChangeTextSearch,
            search,
            setSearch,
            toggleTodo,
            deleteTodo,
            todoList,
            completedTodo,
            error,
            loading
        }}>
            {children}
        </RootContext.Provider>
    )
}