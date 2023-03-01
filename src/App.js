import React , {useMemo, useState} from 'react';
import { ContainerApp } from './components/ContainerApp';
import { CreateTodoButton } from './components/CreateToDoButton';
import { TodoCard } from './components/TodoCard';
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';
import { TodoTitle } from './components/TodoTitle';
import "./index.css"

const LOCAL_STORAGE_ITEM_NAME = "TODOS_PLATZI";

function App() {

  const persistence = !localStorage.getItem(LOCAL_STORAGE_ITEM_NAME) ? [] : JSON.parse(localStorage.getItem(LOCAL_STORAGE_ITEM_NAME))

  console.log(persistence)
  const [todoList, setTodoList] = useState(persistence)

  const [search, setSearch] = useState("")
  const onChangeTextSearch = (event)=>setSearch(event.target.value)

  const completedTodo = todoList.filter(
    item => !!item.completed
  ).length;

  const filteredTodo = useMemo(
    ()=>todoList.filter(
      item => {
        if(search.length < 1 ) return true;
        return item.text.toLowerCase().includes(search.toLowerCase())
      }
    ),
    [search,todoList]
  )

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
    localStorage.setItem(LOCAL_STORAGE_ITEM_NAME , JSON.stringify(todos))
  }


  return (
   <ContainerApp>
      <TodoTitle />
      <TodoCard>
        <TodoCounter
          totalTodo={todoList.length}
          completed={completedTodo}
        />
        <TodoSearch 
          onChangeText={onChangeTextSearch}
          text={search}
        />
        <TodoList>
          {
            filteredTodo.map(
              (item, index) => (
                <TodoItem key={index + new Date().getTime()} item={item} onDelete={deleteTodo} onToggleTodo={toggleTodo}/>
              )
            )
          }
        </TodoList>
        <CreateTodoButton />
      </TodoCard>
   </ContainerApp>
  );
}

export default App;
