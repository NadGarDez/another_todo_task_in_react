import React from 'react';
import { ContainerApp } from './components/ContainerApp';
import { CreateTodoButton } from './components/CreateToDoButton';
import { FilteredItems } from './components/FilteredItems';
import { TodoCard } from './components/TodoCard';
import { TodoCounter } from './components/TodoCounter';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';
import { TodoTitle } from './components/TodoTitle';
import { WithTodo } from './hocs/withTodo';
import { useTodo } from './hooks/useTodo';
import "./index.css"

const LOCAL_STORAGE_ITEM_NAME = "TODOS_PLATZI";

function App() {

  const todoProps = useTodo(LOCAL_STORAGE_ITEM_NAME)

  const TodoCounterWithTodo = WithTodo(TodoCounter, todoProps)
  const TodoSearchWithProps = WithTodo(TodoSearch, todoProps)
  const TodoListWithProps = WithTodo(TodoList , todoProps)
  const FilteredItemsWithProps = WithTodo(FilteredItems , todoProps)
  const CreateTodoButtonWithProps = WithTodo(CreateTodoButton , todoProps)

  return (
      <ContainerApp>
        {
          ({mediaQuery})=>(
            <>
              <TodoTitle mediaQuery={mediaQuery}/>
              <TodoCard mediaQuery={mediaQuery}>
                <TodoCounterWithTodo />
                <TodoSearchWithProps />
                <TodoListWithProps>
                  <FilteredItemsWithProps/>
                </TodoListWithProps>
                <CreateTodoButtonWithProps/>
              </TodoCard>
            </>
          )
        }
      </ContainerApp>
  );
}

export default App;
