import {useEffect, useState} from "react";


export const useTodo = (keyName)=> {


    const [loading, setLoading] = useState(true)

    const [todoList, setTodoList] = useState([])
    const [error, setError] = useState({})

    useEffect(
        ()=> {
            setTimeout(
                ()=> {
                    try {
                        const persistence = !localStorage.getItem(keyName) ? [] : JSON.parse(localStorage.getItem(keyName))
                        setTodoList(persistence)
                    } catch(error){
                        setError({message: error.toString()})
                    }
                    setLoading(false)
                },
                2000
            )

        },
        [keyName, setLoading, setError]
    )

    const toggleTodo = (id)=> {
        setLoading(true)
        setTimeout(
            ()=> {
                try {
                    const todoCopy = [...todoList];
                    const index = todoList.findIndex(
                        item => item.id === id
                    )
                    const newObject = {
                        ...todoList[index],
                        completed: !todoList[index].completed
                    }
                    todoCopy.splice(index , 1, newObject)
                    saveOnLocalStorage(todoCopy)
                    setTodoList(todoCopy)
                }catch (error) {
                    setError({message: error})
                }
                setLoading(false)
            },
            2000
        )
    }

    const deleteTodo = (id)=> {
        setLoading(true)
        setTimeout(
            ()=> {
                try {
                    const todoCopy = [...todoList];
                    const index = todoList.findIndex(
                    item => item.id === id
                    )
                    todoCopy.splice(index , 1)
                    saveOnLocalStorage(todoCopy)
                    setTodoList(todoCopy)
                } catch (error) {
                    setError({message: error})
                }
                setLoading(false)
            },
            2000
        )
        
    }

    const addTodo = (item)=> {
        setLoading(true)
        setTimeout(
            ()=> {
                try {
                    const todoCopy = [...todoList];
                    todoCopy.push(item)
                    saveOnLocalStorage(todoCopy)
                    setTodoList(todoCopy)
                } catch (error) {
                    setError({message: error})
                }
                setLoading(false)
            },
            2000
        )
    }

    const saveOnLocalStorage = (todos)=> {
        localStorage.setItem(keyName , JSON.stringify(todos))
    }


    const [search, setSearch] = useState("")
    const onChangeTextSearch = (event)=>setSearch(event.target.value)

    return {
        toggleTodo,
        deleteTodo,
        addTodo,
        todoList,
        loading,
        error,
        search,
        setSearch,
        onChangeTextSearch
    }
    
}
