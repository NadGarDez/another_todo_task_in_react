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

function App() {

  const [todoList] = useState([{
    text: "holix" , completed: false
  }])

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
                <TodoItem key={index + new Date().getTime()} text={item.text}/>
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
