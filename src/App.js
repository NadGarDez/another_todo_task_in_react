import React , {useMemo, useState} from 'react';
import { ContainerApp } from './components/ContainerApp';
import { CreateTodoButton } from './components/CreateToDoButton';
import { TodoCard } from './components/TodoCard';
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';
import { TodoTitle } from './components/TodoTitle';
import { useLocalStorage } from './hooks/useLocalStorage';
import "./index.css"

const LOCAL_STORAGE_ITEM_NAME = "TODOS_PLATZI";

function App() {

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
        <TodoList error={error} loading={loading}>
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
