import React from 'react';
import { ContainerApp } from './components/ContainerApp';
import { CreateTodoButton } from './components/CreateToDoButton';
import { FilteredItems } from './components/FilteredItems';
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
               <FilteredItems />
            </TodoList>
            <CreateTodoButton />
          </TodoCard>
      </ContainerApp>
    </RootProvider>
  );
}

export default App;
