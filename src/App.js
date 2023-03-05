import React from 'react';
import { ContainerApp } from './components/ContainerApp';
import { CreateTodoButton } from './components/CreateToDoButton';
import { TodoCard } from './components/TodoCard';
import { TodoCounter } from './components/TodoCounter';
import { TodoForm } from './components/TodoForm';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';
import { TodoTitle } from './components/TodoTitle';
import { RootContext, RootProvider } from './context/RootContext';
import "./index.css"


function App() {

  return (
    <RootProvider>
      <ContainerApp>
          <TodoTitle />
          <TodoCard>
            <TodoCounter/>
            <TodoSearch />
            <TodoList>
              <RootContext.Consumer>
                {
                  ({filteredTodo ,deleteTodo , toggleTodo})=> filteredTodo.map(
                    (item, index) => (
                      <TodoItem key={index + new Date().getTime()} item={item} onDelete={deleteTodo} onToggleTodo={toggleTodo}/>
                    )
                  )
                }
              </RootContext.Consumer>
            </TodoList>
            <CreateTodoButton />
          </TodoCard>
      </ContainerApp>
      <TodoForm />
    </RootProvider>
  );
}

export default App;
