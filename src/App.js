import React from 'react';
import { ContainerApp } from './components/ContainerApp';
import { CreateTodoButton } from './components/CreateToDoButton';
import { FilteredItems } from './components/FilteredItems';
import { TodoCard } from './components/TodoCard';
import { TodoCounter } from './components/TodoCounter';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';
import { TodoTitle } from './components/TodoTitle';
import { useTodo } from './hooks/useTodo';
import "./index.css"

const LOCAL_STORAGE_ITEM_NAME = "TODOS_PLATZI";

function App() {

  const {
    toggleTodo,
    deleteTodo,
    addTodo,
    todoList,
    loading,
    error,
    search,
    onChangeTextSearch
  } = useTodo(LOCAL_STORAGE_ITEM_NAME)

  return (
      <ContainerApp>
          <TodoTitle />
          <TodoCard>
            <TodoCounter todoList={todoList}/>
            <TodoSearch onChangeTextSearch={onChangeTextSearch} search={search}/>
            <TodoList loading={loading} error={error}>
               <FilteredItems todoList={todoList} deleteTodo={deleteTodo} toggleTodo={toggleTodo} search={search}/>
            </TodoList>
            <CreateTodoButton addTodo={addTodo} />
          </TodoCard>
      </ContainerApp>
  );
}

export default App;
