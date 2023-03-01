import React, {useState} from "react";


export const useLocalStorage = (keyName)=> {

    const persistence = !localStorage.getItem(keyName) ? [] : JSON.parse(localStorage.getItem(keyName))

    const [todoList, setTodoList] = useState(persistence)

    const completedTodo = todoList.filter(
        item => !!item.completed
    ).length;

    const toggleTodo = (id)=> {
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
    }

    const deleteTodo = (id)=> {
        const todoCopy = [...todoList];
        const index = todoList.findIndex(
        item => item.id === id
        )
        todoCopy.splice(index , 1)
        saveOnLocalStorage(todoCopy)
        setTodoList(todoCopy)
    }

    const saveOnLocalStorage = (todos)=> {
        localStorage.setItem(keyName , JSON.stringify(todos))
    }

    return {
        completedTodo,
        toggleTodo,
        deleteTodo,
        todoList
    }
    
}