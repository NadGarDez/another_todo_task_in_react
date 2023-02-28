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

  const [todoList, setTodoList] = useState([{
    text: "holix" , completed: false , id : new Date().getTime()
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
    setTodoList(todoCopy)
  }

  const deleteTodo = (id)=> {
    const todoCopy = [...todoList];
    const index = todoList.findIndex(
      item => item.id === id
    )
    todoCopy.splice(index , 1)
    setTodoList(todoCopy)
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
