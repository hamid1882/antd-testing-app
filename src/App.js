import TodoList from './components/TodoList/TodoList';
import './App.css';
import { useState } from 'react';

const todoListData = [
  {
    name: "Have Dinner",
    id: 1,
    done: false
  }
]

function App() {
  const [todoList, setTodoList] = useState(todoListData);

  const AddTodo = () => {
    const newObj = {
      name: "empty",
      id: todoList ? todoList[todoList.length - 1].id : 1,
      done: false
    }

    setTodoList((prevTodo) => prevTodo.push(newObj));
  }


  return (
    <div className="App">
      <TodoList
        todoList={todoList}
        handleTodoList={AddTodo}
      />
    </div>
  );
}

export default App;
