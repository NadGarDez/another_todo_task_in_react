import React , {useState} from 'react';
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
    text: "holix"
  }])


  return (
   <ContainerApp>
      <TodoTitle />
      <TodoCard>
        <TodoCounter/>
        <TodoSearch/>
        <TodoList>
          {
            todoList.map(
              (item, index) => (
                <TodoItem key={index} text={item.text}/>
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
